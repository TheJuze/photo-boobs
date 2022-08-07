import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { constants } from "helpers";

import { Input, Button } from "components";

import { useRegistration } from "./utils/useRegistration";

export type RegistrationInputs = {
    username: string;
    password: string;
    email: string;
}

export const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationInputs>();
    const registerUser = useRegistration()

    return (
        <>
            <form className="bg-red-400 p-8 rounded-lg flex flex-col" onSubmit={handleSubmit(registerUser)}>
                <h1 className="text-center">Register</h1>
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
                <Input
                    type="email"
                    placeholder="Email"
                    className="mt-14"
                    register={register("email", {
                        required: true,
                    })}
                    error={errors.email}
                />
                <Button type="submit">Submit</Button>
            </form>
            <p>Already have an account? <Link to={constants.routes.login}>Login</Link></p>
        </>
    )
}