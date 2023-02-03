import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import { Form, island, useFlashMessages, useI18n, useUrlBuilder } from "@microeinhundert/radonis";

import Button from "../Button.island";
import Checkbox from "../Checkbox.island";
import CsrfField from "../CsrfField";
import Input from "../Input.island";
import Link from "../Link";

/*
 * Sign In Form
 */
function SignInForm() {
  const { formatMessage$ } = useI18n();
  const { make$ } = useUrlBuilder();
  const { has$, get$ } = useFlashMessages();

  const messages = {
    email: {
      label: formatMessage$("auth.signIn.form.email.label"),
    },
    password: {
      label: formatMessage$("auth.signIn.form.password.label"),
    },
    rememberMe: {
      label: formatMessage$("auth.signIn.form.rememberMe.label"),
    },
    actions: {
      submit: formatMessage$("auth.signIn.form.actions.submit"),
    },
    signUpLinkLabel: formatMessage$("auth.signIn.form.signUpLinkLabel"),
  };

  return (
    <Form action$="signIn" method="post" noValidate>
      <div className="flex flex-col gap-5">
        <CsrfField />
        <Input
          autoComplete="email"
          label={messages.email.label}
          name="email"
          type="email"
          required
        />
        <Input
          autoComplete="new-password"
          label={messages.password.label}
          name="password"
          type="password"
          required
        />
        {has$("errors.invalidEmailOrPassword") && (
          <div className="my-4 flex flex-col items-center gap-4 rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600 sm:p-6">
            <ExclamationCircleIcon className="h-6 w-6" />
            <span className="block max-w-[30ch]">{get$("errors.invalidEmailOrPassword")}</span>
          </div>
        )}
        <Checkbox label={messages.rememberMe.label} name="rememberMe" />
        <Button className="mt-4" type="submit">
          {messages.actions.submit}
        </Button>
        <div className="text-center text-sm">
          <Link href={make$("signUp")}>{messages.signUpLinkLabel}</Link>
        </div>
      </div>
    </Form>
  );
}

export default island("SignInForm", SignInForm);
