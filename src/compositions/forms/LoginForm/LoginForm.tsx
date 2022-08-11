import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RedirectButton } from "components";
import { constants } from "helpers";
import {
  HideIcon, LockIcon, ProfileIcon, ShowIcon,
} from "assets/images/icons";
import cx from "classnames";
import useLogin from "./utils/useLogin";

export type LoginInputs = {
    username: string;
    password: string;
}

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginInputs>();
  const loginUser = useLogin();

  const iconClassName = "w-18 h-18 text-gray-1 shrink-0";

  const handleVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form className="flex flex-col h-full py-28" onSubmit={handleSubmit(loginUser)}>
      <RedirectButton route={constants.routes.home} />
      <h1 className="text-center text-h1 mt-40 text-white font-extrabold">Войти</h1>
      <Input
        className="mt-[50%]"
        type="text"
        placeholder="Username"
        register={register("username", { required: true })}
        error={errors.username}
        iconLeft={<ProfileIcon className="text-white w-18 h-18" />}
      />
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="mt-14"
        register={register("password", { required: true })}
        error={errors.password}
        iconLeft={<LockIcon className="text-white w-18 h-18" />}
        iconRight={
            isPasswordVisible
              ? <HideIcon className={cx(iconClassName, "cursor-pointer")} onClick={handleVisibilityChange} />
              : <ShowIcon className={cx(iconClassName, "cursor-pointer")} onClick={handleVisibilityChange} />
        }
      />
      <Button type="submit" disabled={!isValid} className="mt-auto">Submit</Button>
    </form>
  );
};

export default LoginForm;
