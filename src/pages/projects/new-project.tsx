import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

import ProjectForm from "@/components/projectForm/Index";

const NewProject = () => {
    return <ProjectForm />;
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
