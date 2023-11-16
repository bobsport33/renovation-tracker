import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { paragraphMedium } from "@/styles/Type";

const AppContentCont = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        &__description {
            ${paragraphMedium}
            text-align: center;
        }
    }
`;

const AppContent = () => {
    return (
        <AppContentCont>
            <h2 className="content__heading">How to get started</h2>
            <p className="content__description">
                To get started making your renovation project easier, just
                create an account or login to an existing account. You will be
                able to see saved projects, make updates to existing projects,
                and add new projects to your profile.
            </p>
            <Image
                src="/images/reno_estimator.PNG"
                alt="screen grab of Reno Estiamtor App"
                height={900}
                width={1440}
            />
        </AppContentCont>
    );
};

export default AppContent;
