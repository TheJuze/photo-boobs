import React from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "components";
import { useNavigate } from "react-router";
import useLogin from "./utils/useLogin";
import { constants } from "../../../helpers";
import { LockIcon, ProfileIcon } from "../../../assets/images/icons";

export type LoginInputs = {
    username: string;
    password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginInputs>();
  const loginUser = useLogin();
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate(constants.routes.auth);
  };

  return (
    <form className="flex flex-col h-full py-28" onSubmit={handleSubmit(loginUser)}>
      <div
        role="button"
        tabIndex={0}
        className="rounded-full w-32 h-32 bg-accent cursor-pointer"
        onClick={redirectToHome}
        onKeyDown={redirectToHome}
      />
      <h1 className="text-center text-h1 mb-[108rem] text-black">Login</h1>
      <Input
        type="text"
        placeholder="Username"
        register={register("username", { required: true })}
        error={errors.username}
        iconLeft={<ProfileIcon className="text-white w-18 h-18" />}
      />
      <Input
        type="password"
        placeholder="Password"
        className="mt-14"
        register={register("password", {
          required: true,
        })}
        error={errors.password}
        iconLeft={<LockIcon className="text-white w-18 h-18" />}
      />
      <Button type="submit" disabled={!isValid} className="mt-auto">Submit</Button>
    </form>
  );
};

export default LoginForm;
