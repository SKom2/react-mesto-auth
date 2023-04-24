import {Header} from "./Header";
import React from "react";
import {Authorization} from "./Authorization";
import {Link} from "react-router-dom";

export function Register() {
    return (
        <>
            <Header text="Войти" way="/sign-in" />
            <Authorization text="Регистрация" id="register" buttonName="Зарегистрироваться"/>
            <p style={{color: "white",
                padding: 0,
                margin: '15px 0 0',
                textAlign:"center",
                fontSize: "14px",
                lineHeight: '17px'
            }}>
                Уже зарегистрированы? <Link to="/sign-in" style={{color: "white", textDecoration: "none"}}>Войти</Link></p>
        </>
    )
}