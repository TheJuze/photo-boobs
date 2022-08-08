import { constants, restApi } from "helpers";
import { SubmitHandler } from "react-hook-form";
import { UserInfo } from "types";

const useEditUserProfile = () => {
  const editUserProfile: SubmitHandler<UserInfo> = async ({ name, status }) => {
    const { data } = await restApi.put(constants.endpoints.profile.profile, { name, status });
    console.log(data);
  };

  return editUserProfile;
};

export default useEditUserProfile;
