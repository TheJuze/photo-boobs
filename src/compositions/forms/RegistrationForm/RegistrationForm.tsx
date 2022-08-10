import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "components";
import {
  ArrowRightIcon, LockIcon, MessageIcon, ProfileIcon,
} from "assets/images/icons";

import { useNavigate } from "react-router";
import useRegistration from "./utils/useRegistration";
import { constants } from "../../../helpers";

export type RegistrationInputs = {
    username: string;
    password: string;
    email: string;
}

const RegistrationForm = () => {
  const {
    register, handleSubmit, formState: { errors, isValid },
  } = useForm<RegistrationInputs>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const registerUser = useRegistration();

  const redirectToHome = () => {
    navigate(constants.routes.auth);
  };

  return (
    <>
      <form className="flex flex-col h-full py-28" onSubmit={handleSubmit(registerUser)}>
        <div
          role="button"
          tabIndex={0}
          className="rounded-full w-32 h-32 bg-accent cursor-pointer"
          onClick={redirectToHome}
          onKeyDown={redirectToHome}
        />
        <h1 className="text-center text-h1 mb-[108rem] text-black">Присоединяйся</h1>
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
            minLength: {
              value: 4,
              message: "Min length 4",
            },
          })}
          error={errors.password}
          iconLeft={<LockIcon className="text-white w-18 h-18" />}
        />
        <Input
          type="email"
          placeholder="Email"
          className="mt-14"
          register={register("email", {
            required: true,
          })}
          error={errors.email}
          iconLeft={<MessageIcon className="text-white w-18 h-18" />}
        />
        <Button type="submit" disabled={!isValid} className="mt-auto">
          Продолжить
          <ArrowRightIcon className="ml-8" />
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
