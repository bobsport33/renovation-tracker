import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

import ProjectForm from "@/components/projectForm/Index";

interface Props {
    email: string;
}

const NewProject = ({ email }: Props) => {
    return <ProjectForm email={email} />;
};

export default NewProject;

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
