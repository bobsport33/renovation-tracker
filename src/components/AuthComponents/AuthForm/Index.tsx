import React, { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { colors } from "@/styles/variables";
import Input from "@/subComponents/Input";
import { createUser } from "@/utils/auth";

interface props {
    state: string;
}

const AuthFormCont = styled.section`
    margin: 0 auto;
    width: 40%;
    padding: 30px;
    border-radius: 30px;
    background-color: ${colors.neutral200};
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;

    .form__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`;

const AuthForm = ({ state }: props) => {
    const [isLogin, setIsLogin] = useState(state === "signin" ? true : false);
    const router = useRouter();
    const email = useRef() as React.MutableRefObject<HTMLInputElement>;
    const password = useRef() as React.MutableRefObject<HTMLInputElement>;
    const firstName = useRef() as React.MutableRefObject<HTMLInputElement>;
    const lastName = useRef() as React.MutableRefObject<HTMLInputElement>;

    const switchModeHandler = () => {
        setIsLogin((curr) => !curr);
        const newState = isLogin ? "signup" : "signin";
        router.replace(`/auth?state=${newState}`);
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        let enteredFirstName;
        let enteredLastName;
        if (!isLogin) {
            enteredFirstName = firstName.current.value;
        }
        if (!isLogin) {
            enteredLastName = lastName.current.value;
        }

        if (isLogin) {
            const result = await signIn("credentials", {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });
            if (result && !result.error) {
                router.replace("/projects");
            }
        } else {
            try {
                const user = await createUser(
                    enteredEmail,
                    enteredPassword,
                    enteredFirstName!,
                    enteredLastName!
                );
                if (user) {
                    router.replace("/projects");
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <AuthFormCont>
            <h1 className="form__heading">{isLogin ? "Login" : "Sign Up"}</h1>
            <form className="form__form" onSubmit={submitHandler}>
                <Input id="email" text="Email" ref={email} />
                <Input id="password" text="Password" ref={password} />

                {!isLogin && (
                    <>
                        <Input
                            id="firstName"
                            text="First Name"
                            ref={firstName}
                        />
                        <Input id="lastName" text="Last Name" ref={lastName} />
                    </>
                )}
                <div className="btn-container">
                    <button className="form__btn form__btn--submit">
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                    <button
                        className="form__btn"
                        type="button"
                        onClick={switchModeHandler}
                    >
                        {isLogin
                            ? "Create new accout"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </AuthFormCont>
    );
};

export default AuthForm;
