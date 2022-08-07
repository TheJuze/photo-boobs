import { SubmitHandler } from "react-hook-form";
import { constants, restApi } from "helpers";
import { LoginInputs } from "../index";

type LoginResponse = {
    accessToken: string
    expiresAt: string
    refreshToken: string
    tokenType: string
}

export const useLogin = () => {
    const loginUser: SubmitHandler<LoginInputs> = async({ username, password }) => {
        try {
            const { data: { accessToken } } = await restApi.post<LoginResponse>('auth/login', {
                username,
                password,
            })
            localStorage.setItem(constants.localStorage.authToken, accessToken)
        }
        catch (err) {
            console.log(err)
        }
    }

    return loginUser
}