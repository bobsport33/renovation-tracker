import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Modal from "@/subComponents/Modal";
import { paragraphLarge } from "@/styles/Type";
import { colors } from "@/styles/variables";

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

const ProjectsListCont = styled.div`
    margin: 120px 0;
    .projects {
        width: 60%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        &__heading {
            color: ${colors.neutral1000};
        }
        &__link {
            ${paragraphLarge}
            color: ${colors.neutral1000};
            transition: color 0.3s;

            &:hover {
                cursor: pointer;
                color: ${colors.blue700};
            }
        }
    }
`;

const ProjectsList = ({ email, projects }: Props) => {
    return (
        <ProjectsListCont>
            <Modal className="projects">
                <h1 className="projects__heading">Projects</h1>
                <ul>
                    {projects.map((project) => {
                        console.log(project);
                        return (
                            <li
                                key={project.project._id}
                                className="projects__link"
                            >
                                <Link href={`/projects/${project.project._id}`}>
                                    {project.project.projectName}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Modal>
        </ProjectsListCont>
    );
};

export default ProjectsList;
