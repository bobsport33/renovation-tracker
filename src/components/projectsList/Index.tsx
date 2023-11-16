import React from "react";
import styled from "styled-components";

import Modal from "@/subComponents/Modal";
import ProjectCard from "./Card";
import { paragraphLarge, paragraphMedium } from "@/styles/Type";
import { colors } from "@/styles/variables";
import Link from "next/link";

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
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .projects {
        width: 60%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        padding: 30px 40px;

        &__heading {
            color: ${colors.neutral1000};
        }

        &__subheading {
            ${paragraphMedium}
            text-align: center;
        }

        &__description {
            ${paragraphMedium}
            text-align: center;
        }

        &__link {
            text-decoration: underline;

            &:hover {
                cursor: pointer;
            }
        }

        &__container {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        &__text-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &__total {
            ${paragraphLarge}
            align-self: flex-end;
        }
    }
`;

const ProjectsList = ({ email, projects }: Props) => {
    let totalCost = 0;
    const projectTotals = projects.map((project) => {
        return project.project.totalPrice;
    });
    if (projects.length > 0) {
        totalCost = projectTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });
    }

    return (
        <ProjectsListCont>
            <Modal className="projects">
                <h1 className="projects__heading">Projects</h1>
                <div className="projects__container">
                    {projects.length > 0 &&
                        projects.map((project) => {
                            return (
                                <ProjectCard
                                    key={project.project._id}
                                    projectProps={project}
                                ></ProjectCard>
                            );
                        })}
                    {projects.length === 0 && (
                        <div className="projects__text-container">
                            <p className="projects__subheading">
                                No Saved Projects
                            </p>
                            <p className="projects__description">
                                Create a{" "}
                                <Link
                                    href="/projects/new-project"
                                    className="projects__link"
                                >
                                    New Project
                                </Link>{" "}
                            </p>
                        </div>
                    )}
                </div>
                <p className="projects__total">
                    Total Cost of All Projects - ${totalCost.toFixed(2)}
                </p>
            </Modal>
        </ProjectsListCont>
    );
};

export default ProjectsList;
