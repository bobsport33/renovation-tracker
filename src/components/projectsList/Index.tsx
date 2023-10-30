import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Modal from "@/subComponents/Modal";
import { paragraphLarge } from "@/styles/Type";
import { colors } from "@/styles/variables";
import { getProjects } from "@/utils/auth";

interface Props {
    email: string;
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

const ProjectsList = ({ email }: Props) => {
    // const projects = getProjects(email);
    console.log(email);
    return (
        <ProjectsListCont>
            <Modal className="projects">
                <h1 className="projects__heading">Projects</h1>
                <ul>
                    {/* {projects.map((project) => {
                        return (
                            <li key={project.id} className="projects__link">
                                <Link href={`/projects/${project.id}`}>
                                    {project.title}
                                </Link>
                            </li>
                        );
                    })} */}
                </ul>
            </Modal>
        </ProjectsListCont>
    );
};

export default ProjectsList;
