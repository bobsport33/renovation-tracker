import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

import { getProjectById } from "@/utils/auth";
import ProjectForm from "@/components/projectForm/Index";
import { Project } from "@/types/Index";

interface Props {
    project: Project;
}

const ProjectPage = ({ project }: Props) => {
    return <ProjectForm project={project}></ProjectForm>;
};

export default ProjectPage;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);
    const id = context.query.slug;

    let projectDetails;
    if (typeof id === "string") {
        projectDetails = await getProjectById(id);
    }

    if (session) {
        return {
            props: { project: projectDetails },
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
