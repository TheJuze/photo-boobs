import { constants, restApi } from "helpers";
import { SubmitHandler } from "react-hook-form";
import { UserInfo } from "types";

const useEditUserProfile = () => {
  const editUserProfile: SubmitHandler<UserInfo> = async ({ name, status }) => {
    try {
      const { data } = await restApi.put(constants.endpoints.profile.profile, { name, status });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return editUserProfile;
};

export default useEditUserProfile;
