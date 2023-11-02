import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Modal from "@/subComponents/Modal";
import ProjectCard from "./Card";
import { paragraphLarge, paragraphMedium } from "@/styles/Type";
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
        gap: 30px;
        padding: 30px 40px;

        &__heading {
            color: ${colors.neutral1000};
        }

        &__container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
        }

        &__total {
            ${paragraphMedium}
            align-self: flex-end;
        }
    }
`;

const ProjectsList = ({ email, projects }: Props) => {
    const projectTotals = projects.map((project) => {
        return project.project.totalPrice;
    });
    const totalCost = projectTotals.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    return (
        <ProjectsListCont>
            <Modal className="projects">
                <h1 className="projects__heading">Projects</h1>
                <div className="projects__container">
                    {projects.map((project) => {
                        // console.log(project);
                        return (
                            <ProjectCard
                                key={project.project._id}
                                projectProps={project}
                            ></ProjectCard>
                        );
                    })}
                </div>
                <p className="projects__total">
                    Total Cost of All Projects - ${totalCost.toFixed(2)}
                </p>
            </Modal>
        </ProjectsListCont>
    );
};

export default ProjectsList;
