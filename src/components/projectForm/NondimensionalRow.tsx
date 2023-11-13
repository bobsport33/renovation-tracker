import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { Nondimensional } from "@/types/Index";
import Input from "@/subComponents/Input";

interface NondimensionalRowProps {
    rowIndex: number;
    row: Nondimensional;
    nondimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Nondimensional
    ) => void;
    className: string;
}

const NondimensionalRowCont = styled.tr`
    display: flex;
    gap: 5px;

    .row {
        &__input {
            width: 100%;
        }
    }
`;

const NondimensionalRow = ({
    rowIndex,
    row,
    nondimensionalInputChangeHandler,
    className,
}: NondimensionalRowProps) => {
    return (
        <NondimensionalRowCont className={className}>
            <Input
                className="row__input"
                value={row.material}
                onChange={(e) =>
                    nondimensionalInputChangeHandler(e, rowIndex, "material")
                }
            />

            <Input
                className="row__input"
                value={row.size}
                onChange={(e) =>
                    nondimensionalInputChangeHandler(e, rowIndex, "size")
                }
            />

            <Input
                className="row__input"
                value={row.quantity}
                onChange={(e) =>
                    nondimensionalInputChangeHandler(e, rowIndex, "quantity")
                }
            />

            <Input
                className="row__input"
                value={row.pricePerUnit}
                onChange={(e) =>
                    nondimensionalInputChangeHandler(
                        e,
                        rowIndex,
                        "pricePerUnit"
                    )
                }
            />
        </NondimensionalRowCont>
    );
};

export default NondimensionalRow;
