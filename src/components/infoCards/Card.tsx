import React from "react";
import styled from "styled-components";

import { paragraphMedium } from "@/styles/Type";
import { colors } from "@/styles/variables";

interface CardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
}

const CardCont = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: ${colors.neutral200};
    padding: 15px;

    .card {
        &__image {
            width: 100%;
        }

        &__heading {
            text-align: center;
        }

        &__description {
            ${paragraphMedium}
        }
    }
`;

const Card = ({ imageUrl, imageAlt, title, description }: CardProps) => {
    return (
        <CardCont>
            <img src={imageUrl} alt={imageAlt} className="card__image" />
            <h5 className="card__heading">{title}</h5>
            <p className="card__description">{description}</p>
        </CardCont>
    );
};

export default Card;
