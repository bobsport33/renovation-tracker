import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

import ProjectsList from "@/components/projectsList/Index";

interface Props {
    email: string;
}

const Projects = ({ email }: Props) => {
    // get projects using session email

    return <ProjectsList email={email} />;
};

export default Projects;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);

    const email = session?.user?.email;

    if (session) {
        return {
            props: { email: email },
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
