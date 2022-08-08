import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { useProfile } from "context";
import { Button, Input } from "components";
import { UserInfo } from "types";

import useEditProfile from "./utils/useEditProfile";

const EditProfileForm = () => {
  const profile = useProfile();
  const {
    register, handleSubmit, reset, getValues, formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: useMemo(() => ({
      id: profile?.profile?.id,
      username: profile?.profile?.username,
      name: profile?.profile?.name,
      status: profile?.profile?.status,
      imagePath: profile?.profile?.imagePath,
    }), [profile?.profile]),
  });

  const editUserProfile = useEditProfile();

  const values = getValues();

  useEffect(() => {
    profile?.getCurrentProfile();
  }, []);

  useEffect(() => {
    reset(profile?.profile as UserInfo);
  }, [profile?.profile]);

  return (
    <form className="bg-green-300 p-8 rounded-lg flex flex-col" onSubmit={handleSubmit(editUserProfile)}>
      <img src={values?.imagePath ? `${process.env.REACT_APP_BASE_BACKEND_URL}${values?.imagePath}` : ""} alt="profile" />
      <Input
        type="text"
        placeholder="UserName"
        register={register("username", { required: true })}
        error={errors.username}
      />
      <Input
        type="text"
        placeholder="Name"
        register={register("name", { required: true })}
        error={errors.name}
      />
      <Input
        type="text"
        placeholder="Status"
        className="mt-14"
        register={register("status", { required: true })}
        error={errors.status}
      />
      <Button type="submit">Update</Button>
    </form>
  );
};

export default EditProfileForm;
