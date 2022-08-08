import React from "react";
import { EditProfileForm } from "compositions";
import { useAuthedNavigation } from "hooks";

const ProfilePage = () => {
  useAuthedNavigation();

  return (
    <div>
      <EditProfileForm />
    </div>
  );
};

export default ProfilePage;
