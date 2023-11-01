import React from "react";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

import { getProjectById } from "@/utils/auth";
import ProjectForm from "@/components/projectForm/Index";

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
    project: Project;
}

const ProjectPage = ({ project }: Props) => {
    console.log(project);
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
