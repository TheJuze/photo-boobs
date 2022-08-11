import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RedirectButton } from "components";
import { constants } from "helpers";
import { LockIcon, ProfileIcon } from "assets/images/icons";
import useLogin from "./utils/useLogin";

export type LoginInputs = {
    username: string;
    password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginInputs>();
  const loginUser = useLogin();

  return (
    <form className="flex flex-col h-full py-28" onSubmit={handleSubmit(loginUser)}>
      <RedirectButton route={constants.routes.home} />
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
