import React from "react";
import { useForm } from "react-hook-form";

import { Button, Input } from "components";
import { useLogin } from "./utils/useLogin";


export type LoginInputs = {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
    const loginUser = useLogin()

    return (
        <form className="bg-blue-300 p-8 rounded-lg flex flex-col" onSubmit={handleSubmit(loginUser)}>
            <h1 className="text-center">Login</h1>
            <Input
                type="text"
                placeholder="Username"
                register={register("username", { required: true })}
                error={errors.username}
            />
            <Input
                type="password"
                placeholder="Password"
                className="mt-14"
                register={register("password", {
                    required: true,
                    minLength: {
                        value: 4,
                        message: 'Min length 4'
                    },
                })}
                error={errors.password}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}