import React from "react";
import { ReactComponent as LogoGradient } from "assets/images/logo-gradient.svg";
import { Button } from "components";
import { constants } from "helpers";

const AuthPage = () => (
  <div className="bg-white h-full flex flex-col items-center pb-68 px-42">
    <LogoGradient className="mt-[50%]" />
    <p className="text-h1 text-gray-1 text-center text-body-large font-bold mt-22">
      Делись моментами с друзьями
    </p>
    <Button className="mt-auto" href={constants.routes.registration}>Регистрация</Button>
    <Button className="mt-12" href={constants.routes.login}>Вход</Button>
  </div>
);

export default AuthPage;
