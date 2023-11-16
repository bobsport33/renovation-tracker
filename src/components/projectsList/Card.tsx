import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Project } from "@/types/Index";
import { paragraphMedium } from "@/styles/Type";
import { colors } from "@/styles/variables";

interface ProjectProps {
    projectProps: Project;
}

const ProjectCardCont = styled(Link)`
    width: 100%;

    &:hover {
        .card {
            &__cont {
                background-color: ${colors.neutral700};
            }
        }
    }
    .card {
        &__cont {
            padding: 30px;
            background-color: ${colors.neutral800};
            border-radius: 30px;
            transition: background-color 0.3s;
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
        }
        &__heading {
            color: ${colors.neutral100};
        }
        &__cost {
            ${paragraphMedium}
            color: ${colors.neutral200};
        }
    }
`;

const ProjectCard = ({ projectProps }: ProjectProps) => {
    return (
        <ProjectCardCont href={`/projects/${projectProps.project._id}`}>
            <div className="card__cont">
                <h6 className="card__heading">
                    {projectProps.project.projectName}
                </h6>
                <span className="card__cost">
                    Cost - ${projectProps.project.totalPrice.toFixed(2)}
                </span>
            </div>
        </ProjectCardCont>
    );
};

export default ProjectCard;
