import { paragraphMedium } from "@/styles/Type";
import React from "react";
import styled from "styled-components";
import Card from "./Card";

const InfoCardsCont = styled.section`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .info {
        &__text-container {
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        &__heading {
            text-align: center;
        }

        &__description {
            text-align: center;
            ${paragraphMedium};
        }

        &__card-container {
            padding: 0 20px;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
    }
`;

const InfoCards = () => {
    const cardInfo = [
        {
            imageUrl: "/images/ledger.jpg",
            imageAlt: "a partially filled out ledger",
            title: "Crunching the numbers",
            description:
                "Spend less time calculating square footage or crunching numbers. Just enter your dimensions and let the Renovation Estimaor do the calculations for you.",
        },
        {
            imageUrl: "/images/paperwork_and_tools.jpg",
            imageAlt: "tools on a counter next to paperwork",
            title: "Save the details that mater",
            description:
                "In the Renovation Estimator, everything gets saved in the cloud. You do not have to worry about losing a spreadsheet, forgetting square footage, or being able to access your information on the go.",
        },
        {
            imageUrl: "/images/paint_samples.jpg",
            imageAlt: "paint sampeles",
            title: "Focus on the project details",
            description:
                "Put your energy and focus towards the project. Don't spend unnecessary time calculating numbers or remeasuring for material.",
        },
    ];
    return (
        <InfoCardsCont>
            <div className="info__text-container">
                <h2 className="info__heading">Why use a project estimator?</h2>
                <p className="info__description">
                    Why can't I just write everything down on paper, or use a
                    spreadsheet? What if you are at the hardward store buying
                    supplies, or you cannot access your spreadsheet on a
                    jobsite? The Renovation Estimator tool streamlines
                    convienence and efficency to keep your focus on completing
                    the project at hand.
                </p>
            </div>
            <div className="info__card-container">
                {cardInfo.map((info, i) => {
                    return (
                        <Card
                            key={i}
                            imageUrl={info.imageUrl}
                            imageAlt={info.imageAlt}
                            title={info.title}
                            description={info.description}
                        />
                    );
                })}
            </div>
        </InfoCardsCont>
    );
};

export default InfoCards;
