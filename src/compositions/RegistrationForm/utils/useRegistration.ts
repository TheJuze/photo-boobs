import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { constants, restApi } from "helpers";

import { RegistrationInputs } from "../index";

const useRegistration = () => {
  const navigate = useNavigate();

  const registerUser: SubmitHandler<RegistrationInputs> = async ({ username, password, email }) => {
    try {
      await restApi.post("auth/registration", {
        username,
        password,
        email,
      });
      navigate(constants.routes.login);
    } catch (err) {
      console.log(err);
    }
  };

  return registerUser;
};

export default useRegistration;