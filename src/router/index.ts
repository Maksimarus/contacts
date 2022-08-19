import React from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

interface IRoute {
  path: string;
  component: React.ComponentType;
}

enum RouteNames {
  LOGIN = "/login",
  HOME = "/",
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: HomePage },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: LoginPage },
];
