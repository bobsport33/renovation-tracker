import React from "react";
import styled from "styled-components";

import { colors } from "@/styles/variables";

const AddButtonCont = styled.div`
    border-radius: 50%;
    border: none;
    background-color: ${colors.blue500};
    font-size: 25px;
    height: 30px;
    width: 30px;
    box-shadow: 2px 4px 8px ${colors.neutral1000};
    color: ${colors.neutral200};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddButton = () => {
    return <AddButtonCont>+</AddButtonCont>;
};

export default AddButton;
