/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", "HomeController.index").as("home");

Route.group(() => {
  Route.get("/dashboard", "DashboardController.index").as("dashboard");
  Route.get("/settings", "SettingsController.index").as("settings");
  Route.resource("gardens", "GardensController").as("gardens");
}).middleware("auth");

Route.get("/signUp", "AuthController.signUpShow").as("signUpShow");
Route.post("/signUp", "AuthController.signUp").as("signUp");

Route.get("/signIn", "AuthController.signInShow").as("signInShow");
Route.post("/signIn", "AuthController.signIn").as("signIn");

Route.get("/signOut", "AuthController.signOut").as("signOut");
