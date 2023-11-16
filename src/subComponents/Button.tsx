import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

import { colors } from "@/styles/variables";
import { paragraphSmall } from "@/styles/Type";

interface ButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    color?: string;
    className?: string;
    type?: "button" | "reset" | "submit";
}

const ButtonCont = styled.button`
    border-radius: 5px;
    padding: 5px 10px;
    ${paragraphSmall};
    border: none;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${colors.neutral100};
    color: ${colors.neutral1000};

    &:hover {
        background-color: ${colors.neutral200};
        cursor: pointer;
    }

    ${({ color }) => {
        if (color === "blue") {
            return css`
                border: 2px solid ${colors.blue500};
                color: ${colors.neutral1000};
                background-color: transparent;

                &:hover {
                    background-color: ${colors.blue500};
                    color: ${colors.neutral100};
                }
            `;
        } else if (color === "red") {
            return css`
                border: 2px solid ${colors.red600};
                background-color: transparent;

                &:hover {
                    background-color: ${colors.red600};
                    color: ${colors.neutral100};
                }
            `;
        }
    }}
`;

const Button = ({ text, onClick, color, className, type }: ButtonProps) => {
    return (
        <ButtonCont
            onClick={onClick}
            color={color}
            className={className}
            type={type}
        >
            {text}
        </ButtonCont>
    );
};

export default Button;
