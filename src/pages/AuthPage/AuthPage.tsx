import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Button } from "components";
import { constants } from "helpers";

const AuthPage = () => (
  <div className="bg-black h-full flex flex-col items-center justify-end pb-56 px-48">
    <Logo />
    <p className="text-h1 text-white max-w-[263rem] text-center font-bold mt-[196rem]">
      Делись моментами с друзьями
    </p>
    <Button className="mt-56" href={constants.routes.registration}>Регистрация</Button>
    <Button className="mt-8" href={constants.routes.login}>Вход</Button>
  </div>
);

export default AuthPage;
