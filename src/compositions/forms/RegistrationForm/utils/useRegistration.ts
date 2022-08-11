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
      const {
        data: { accessToken, refreshToken, tokenType },
      } = await restApi.post<AuthResponse>(constants.endpoints.auth.registration, {
        username,
        password: sha256(password),
        email,
      });

      localStorage.setItem(constants.localStorage.accessToken, accessToken);
      localStorage.setItem(constants.localStorage.refreshToken, refreshToken);
      localStorage.setItem(constants.localStorage.tokenType, tokenType);

      navigate(constants.routes.home);
    } catch (err) {
      console.log(err);
    }
  };

  return registerUser;
};

export default useRegistration;
