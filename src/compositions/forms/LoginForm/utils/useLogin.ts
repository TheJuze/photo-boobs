import { SubmitHandler } from "react-hook-form";
import { constants, restApi } from "helpers";
import { AuthResponse } from "types";
import { useNavigate } from "react-router";
import { sha256 } from "js-sha256";
import { LoginInputs } from "../LoginForm";

const useLogin = () => {
  const navigate = useNavigate();

  const loginUser: SubmitHandler<LoginInputs> = async ({ username, password }) => {
    try {
      const { data: { accessToken } } = await restApi.post<AuthResponse>(
        constants.endpoints.auth.login,
        {
          username,
          password: sha256(password),
        },
      );

      localStorage.setItem(constants.localStorage.authToken, accessToken);

      navigate(constants.routes.home);
    } catch (err) {
      console.log(err);
    }
  };

  return loginUser;
};

export default useLogin;
