import React from "react";
import styled from "styled-components";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const NewProjectCont = styled.div``;

const NewProject = () => {
    return (
        <NewProjectCont>
            <h1>new projects</h1>
        </NewProjectCont>
    );
};

export default NewProject;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);

    if (session) {
        return {
            props: { session },
        };
    } else if (session == null) {
        return {
            redirect: {
                destination: "/auth",
                permanent: true,
            },
        };
    }
};
