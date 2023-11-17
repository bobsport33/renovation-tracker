import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { colors } from "@/styles/variables";
import Button from "@/subComponents/Button";

const CTACont = styled.section`
    margin: 80px auto;
    max-width: 800px;
    padding: 30px;
    background-color: ${colors.neutral200};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CTA = () => {
    const router = useRouter();

    const clickHandler = () => {
        router.push("/auth?state=signin");
    };
    return (
        <CTACont>
            <h2 className="cta__heading">Sign Up</h2>
            <Button text="Sign Up" onClick={clickHandler} color="blue" />
        </CTACont>
    );
};

export default CTA;
