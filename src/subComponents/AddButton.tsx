import React from "react";
import styled from "styled-components";

import { colors } from "@/styles/variables";
import Plus from "@/styles/svg/plus.svg";

const AddButtonCont = styled.div`
    border-radius: 50%;
    border: none;
    background-color: ${colors.blue500};
    height: fit-content;
    width: fit-content;
    /* box-shadow: 2px 3px 6px ${colors.neutral1000}; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${colors.blue400};
    }
    /* &:active { */
    /* box-shadow: 2px 4px 8px ${colors.neutral1000};
    } */

    .button__text {
        height: 30px;
        width: 30px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const AddButton = () => {
    return (
        <AddButtonCont>
            <p className="button__text">
                <Plus />
            </p>
        </AddButtonCont>
    );
};

export default AddButton;
