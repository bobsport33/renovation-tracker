import React, { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { colors } from "@/styles/variables";
import Input from "@/subComponents/Input";
import { createUser } from "@/utils/auth";
import Button from "@/subComponents/Button";

interface props {
    state: string;
}

const AuthFormCont = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;

    .form {
        &__container {
            margin: 0 auto;
            width: 40%;
            padding: 30px;
            border-radius: 30px;
            background-color: ${colors.neutral200};
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
        }
        &__form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        &__btn-container {
            display: flex;
            gap: 15px;
        }
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
            <div className="form__container">
                <h1 className="form__heading">
                    {isLogin ? "Login" : "Sign Up"}
                </h1>
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
                            <Input
                                id="lastName"
                                text="Last Name"
                                ref={lastName}
                            />
                        </>
                    )}
                    <div className="form__btn-container">
                        <Button
                            text={isLogin ? "Login" : "Create Account"}
                            color="blue"
                        />
                        <Button
                            text={
                                isLogin
                                    ? "Create new account"
                                    : "Login with existing account"
                            }
                            className="form__btn"
                            onClick={switchModeHandler}
                            type="button"
                        />
                    </div>
                </form>
            </div>
        </AuthFormCont>
    );
};

export default AuthForm;
