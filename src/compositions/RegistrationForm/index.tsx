import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import { Input, Button } from "components";
import { restApi } from "../../helpers";

type Inputs = {
    login: string;
    password: string;
}

export const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async({ login, password }) => {
        try {
            await restApi.post('auth/login', {
                login,
                password,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const onError = (errors: any, e: any) => console.error(errors, e);

    return (
        <form className="bg-red-400 p-8 rounded-lg flex flex-col" onSubmit={handleSubmit(onSubmit, onError)}>
            <h1 className="text-center">Register</h1>
            <Input
                type="text"
                placeholder="asbsa"
                register={register("login", { required: true })}
                error={errors.login}
            />
            <Input
                type="password"
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