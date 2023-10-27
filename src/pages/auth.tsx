import React from "react";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

import AuthForm from "@/components/AuthComponents/AuthForm/Index";

interface props {
    state: string;
}

const Auth = (props: props) => {
    const state = props.state;

    return <AuthForm state={state}></AuthForm>;
};

export default Auth;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const state = context.query.state;

    console.log(state);

    return {
        props: {
            state: state,
        },
    };
}
