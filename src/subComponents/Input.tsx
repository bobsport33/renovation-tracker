import React, { forwardRef } from "react";
import styled from "styled-components";

import { paragraphLarge } from "@/styles/Type";
import { colors } from "@/styles/variables";

interface Input {
    id?: string;
    text?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (e: any) => void;
    className?: string;
}

const InputCont = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    .input {
        &__label {
            ${paragraphLarge}
        }
        &__input {
            flex: 1;
            padding: 8px;
            border: 2px solid ${colors.neutral500};
        }
    }
`;

const Input = forwardRef(
    (
        { id, text, value, readOnly, onChange, className }: Input,
        ref: React.Ref<HTMLInputElement>
    ) => {
        return (
            <InputCont className={className}>
                {text && (
                    <label htmlFor={id} className="input__label">
                        {text}
                    </label>
                )}
                <input
                    ref={ref}
                    type={id}
                    value={value}
                    className="input__input"
                    id={id}
                    required
                    readOnly={readOnly}
                    onChange={onChange}
                />
            </InputCont>
        );
    }
);

export default Input;
