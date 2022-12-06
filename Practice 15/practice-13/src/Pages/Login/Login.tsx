import React from "react";
import { LoginHead } from "./LoginHead/LoginHead";
import { LoginForm } from "./LoginForm/LoginForm";
import { End } from "../../Tools/End/End";

export const Login = () => {
  document.title = "Логин";

  return (
    <>
      <LoginHead />
      <LoginForm />
      <End />
    </>
  );
};
