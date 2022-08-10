import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { constants, restApi } from "helpers";
import { AuthResponse } from "types";
import { sha256 } from "js-sha256";
import { RegistrationInputs } from "../RegistrationForm";

const useRegistration = () => {
  const navigate = useNavigate();

  const registerUser: SubmitHandler<RegistrationInputs> = async ({ username, password, email }) => {
    try {
      // eslint-disable-next-line max-len
      const { data: { accessToken } } = await restApi.post<AuthResponse>(constants.endpoints.auth.registration, {
        username,
        password: sha256(password),
        email,
      });

      localStorage.setItem(constants.localStorage.authToken, accessToken);

      navigate(constants.routes.home);
    } catch (err) {
      console.log(err);
    }
  };

  return registerUser;
};

export default useRegistration;
