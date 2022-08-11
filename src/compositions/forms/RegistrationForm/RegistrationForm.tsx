import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RedirectButton } from "components";
import {
  ArrowRightIcon, LockIcon, MessageIcon, ProfileIcon, HideIcon, ShowIcon,
} from "assets/images/icons";
import { constants } from "helpers";
import cx from "classnames";
import useRegistration from "./utils/useRegistration";

export type RegistrationInputs = {
    username: string;
    password: string;
    email: string;
}

const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register, handleSubmit, formState: { errors, isValid },
  } = useForm<RegistrationInputs>({
    mode: "onBlur",
  });

  const registerUser = useRegistration();

  const iconClassName = "w-18 h-18 text-gray-1 shrink-0";

  const handleVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <form className="flex flex-col h-full py-28" onSubmit={handleSubmit(registerUser)}>
        <RedirectButton route={constants.routes.home} />
        <h1 className="text-center text-h1 mt-40 text-white font-extrabold">Присоединяйся</h1>
        <Input
          className="mt-[50%]"
          type="text"
          placeholder="Username"
          register={register("username", { required: true })}
          error={errors.username}
          iconLeft={<ProfileIcon className={iconClassName} />}
        />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          className="mt-8"
          register={register("password", {
            required: true,
            minLength: {
              value: 4,
              message: "Min length 4",
            },
          })}
          error={errors.password}
          iconLeft={<LockIcon className={iconClassName} />}
          iconRight={
            isPasswordVisible
              ? <HideIcon className={cx(iconClassName, "cursor-pointer")} onClick={handleVisibilityChange} />
              : <ShowIcon className={cx(iconClassName, "cursor-pointer")} onClick={handleVisibilityChange} />
}
        />
        <Input
          type="email"
          placeholder="Email"
          className="mt-8"
          register={register("email", {
            required: true,
          })}
          error={errors.email}
          iconLeft={<MessageIcon className={iconClassName} />}
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
