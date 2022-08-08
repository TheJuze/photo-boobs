import { SubmitHandler } from "react-hook-form";
import { constants, restApi } from "helpers";
import { LoginInputs } from "../LoginForm";

type LoginResponse = {
    accessToken: string
    expiresAt: string
    refreshToken: string
    tokenType: string
}

const useLogin = () => {
  const loginUser: SubmitHandler<LoginInputs> = async ({ username, password }) => {
    try {
      const { data: { accessToken } } = await restApi.post<LoginResponse>(
        constants.endpoints.auth.login,
        {
          username,
          password,
        },
      );
      localStorage.setItem(constants.localStorage.authToken, accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return loginUser;
};

export default useLogin;
