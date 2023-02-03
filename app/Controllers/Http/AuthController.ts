import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import SignInValidator from "App/Validators/SignInValidator";
import SignUpValidator from "App/Validators/SignUpValidator";
import { SignIn, SignUp } from "Views/Auth";

export default class AuthController {
  /*
   * signUpShow action
   */
  public signUpShow({ radonis, i18n }: HttpContextContract) {
    return radonis.withHeadTitle(i18n.formatMessage("auth.signUp.title")).render(SignUp);
  }

  /*
   * signInShow action
   */
  public signInShow({ radonis, i18n }: HttpContextContract) {
    return radonis.withHeadTitle(i18n.formatMessage("auth.signIn.title")).render(SignIn);
  }

  /*
   * signUp action
   */
  public async signUp({ response, request, auth }: HttpContextContract) {
    const data = await request.validate(SignUpValidator);

    const user = await User.create(data);

    await auth.login(user);

    if (request.accepts(["html"])) {
      return response.redirect().toRoute("dashboard");
    }

    return response.json(true);
  }

  /*
   * signIn action
   */
  public async signIn({ response, request, auth, session, i18n }: HttpContextContract) {
    const { email, password, rememberMe } = await request.validate(SignInValidator);

    try {
      await auth.attempt(email, password, rememberMe);

      if (request.accepts(["html"])) {
        return response.redirect().toRoute("dashboard");
      }

      return response.json(true);
    } catch {
      session.flash({
        email,
        errors: {
          invalidEmailOrPassword: i18n.formatMessage("validator.invalidEmailOrPassword"),
        },
      });

      if (request.accepts(["html"])) {
        return response.redirect().back();
      }

      return response.json(false);
    }
  }

  /*
   * signOut action
   */
  public async signOut({ response, request, auth }: HttpContextContract) {
    await auth.logout();

    if (request.accepts(["html"])) {
      return response.redirect().toRoute("home");
    }

    return response.json(true);
  }
}
