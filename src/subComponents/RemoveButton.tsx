import React from "react";
import styled from "styled-components";

import Minus from "@/styles/svg/minus.svg";
import { colors } from "@/styles/variables";

const RemoveButtonCont = styled.div`
    border-radius: 50%;
    border: none;
    background-color: ${colors.blue500};
    font-size: 25px;
    height: 30px;
    width: 30px;
    box-shadow: 2px 4px 8px ${colors.neutral1000};
    color: ${colors.neutral200};

    .button__text {
        height: 30px;
        width: 30px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const RemoveButton = () => {
    return (
        <RemoveButtonCont>
            <p className="button__text">
                <Minus />
            </p>
        </RemoveButtonCont>
    );
};

export default RemoveButton;
