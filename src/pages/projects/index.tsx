import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

import ProjectsList from "@/components/projectsList/Index";
import { getProjectById } from "@/utils/auth";

interface DimensionalMaterial {
    material: string;
    dimension1: string;
    dimension2: string;
    sqft: string;
    pricePerSqft: string;
}

interface NondimensionalMaterial {
    material: string;
    size: string;
    quantity: string;
    pricePerUnit: string;
}

interface Project {
    mesage: string;
    project: {
        dimensionalMaterial: DimensionalMaterial[];
        nondimensionalMaterial: NondimensionalMaterial[];
        projectName: string;
        totalPrice: number;
        _id: string;
    };
}
interface Props {
    email: string;
    projects: Project[];
}

const Projects = ({ email, projects }: Props) => {
    console.log(projects);
    return <ProjectsList email={email} projects={projects} />;
};

export default Projects;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);

    const email = session?.user?.email;

    const response = await axios.post(
        "http://localhost:3000/api/auth/getProjects",
        {
            body: JSON.stringify({
                email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const projects = response.data.projects;

    const fullProjects = await Promise.all(
        projects.map(async (project: string) => {
            const projectDetails = await getProjectById(project);
            return projectDetails;
        })
    );

    if (session) {
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
