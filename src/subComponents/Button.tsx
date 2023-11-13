import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

import { colors } from "@/styles/variables";
import { paragraphSmall } from "@/styles/Type";

interface ButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    color?: string;
}

const ButtonCont = styled.button`
    border: 2px solid ${colors.blue500};
    border-radius: 5px;
    padding: 5px 10px;
    ${paragraphSmall};
    background-color: transparent;
    color: ${colors.neutral1000};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        cursor: pointer;
        background-color: ${colors.blue500};
        color: ${colors.neutral100};
    }

    ${({ color }) => {
        if (color === "red") {
            return css`
                border: 2px solid ${colors.red600};

                &:hover {
                    background-color: ${colors.red600};
                    color: ${colors.neutral100};
                }
            `;
        }
    }}
`;

const Button = ({ text, onClick, color }: ButtonProps) => {
    return (
        <ButtonCont onClick={onClick} color={color}>
            {text}
        </ButtonCont>
    );
};

export default Button;
