import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

import ProjectsList from "@/components/projectsList/Index";
import { getProjectById } from "@/utils/auth";
import { Project } from "@/types/Index";
import apiUrl from "@/utils/apiUrl";

interface Props {
    email: string;
    projects: Project[];
}

const Projects = ({ email, projects }: Props) => {
    return <ProjectsList email={email} projects={projects} />;
};

export default Projects;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);

    const email = session?.user?.email;

    if (session) {
        const response = await axios.post(apiUrl("auth/getProjects"), {
            body: JSON.stringify({
                email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const projects = response.data.projects;

        const fullProjects = await Promise.all(
            projects.map(async (project: string) => {
                const projectDetails = await getProjectById(project);
                return projectDetails;
            })
        );
        return {
            props: { email: email, projects: fullProjects },
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
