import React, { forwardRef } from "react";
import styled from "styled-components";

import { paragraphMedium } from "@/styles/Type";

interface Input {
    id: string;
    text: string;
    className?: string;
}

const InputCont = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;

    .input {
        &__label {
            ${paragraphMedium}
        }
        &__input {
            flex: 1;
        }
    }
`;

const Input = forwardRef(
    ({ id, text, className }: Input, ref: React.Ref<HTMLInputElement>) => {
        return (
            <InputCont className={className}>
                <label htmlFor={id} className="input__label">
                    {text}
                </label>
                <input
                    ref={ref}
                    type={id}
                    className="input__input"
                    id={id}
                    required
                />
            </InputCont>
        );
    }
);

export default Input;
