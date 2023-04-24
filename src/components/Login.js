import React from "react";
import {Header} from "./Header";
import {Authorization} from "./Authorization";

export function Login() {

    return (
        <>
            <Header text="Регистрация" way="/sign-up" />
            <Authorization text="Вход" id="login" buttonName="Войти" />
        </>
    )
}