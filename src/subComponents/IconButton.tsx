import React from "react";
import styled, { css } from "styled-components";

import { colors } from "@/styles/variables";
import { paragraphSmall } from "@/styles/Type";

interface IconBtnProps {
    text: string;
    Icon: React.ElementType;
    onClick: () => void;
    color: string;
}

const IconButtonCont = styled.div`
    border: none;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        .btn__background::after {
            transform: translateX(0);
        }
    }

    .btn {
        &__background {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            ${({ color }) => {
                if (color === "blue") {
                    return css`
                        background-color: ${colors.blue500};
                    `;
                } else {
                    return css`
                        background-color: ${colors.red600};
                    `;
                }
            }}

            &::after {
                content: "";
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;

                transition: transform 0.5s ease-in-out;
                transform: translateX(100%);

                ${({ color }) => {
                    if (color === "blue") {
                        return css`
                            background-color: ${colors.blue600};
                        `;
                    } else {
                        return css`
                            background-color: ${colors.red700};
                        `;
                    }
                }}
            }
        }
        &__text {
            color: ${colors.neutral100};
            ${paragraphSmall}
            padding: 5px 10px;
            z-index: 1;
        }

        &__icon {
            ${({ color }) => {
                if (color === "blue") {
                    return css`
                        background-color: ${colors.blue600};
                    `;
                } else {
                    return css`
                        background-color: ${colors.red700};
                    `;
                }
            }}

            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            z-index: 1;

            & svg {
                width: 20px;
                height: auto;
                pointer-events: none;
            }
        }
    }

    &:hover {
        cursor: pointer;
    }
`;

const IconButton = ({ text, Icon, onClick, color }: IconBtnProps) => {
    return (
        <IconButtonCont onClick={onClick} color={color}>
            <div className="btn__background"></div>
            <p className="btn__text">{text}</p>
            <div className="btn__icon">
                <Icon />
            </div>
        </IconButtonCont>
    );
};

export default IconButton;
