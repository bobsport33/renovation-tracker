import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Dimensional } from "@/types/Index";
import Input from "@/subComponents/Input";

interface DimensionalRowProps {
    className?: string;
    rowIndex: number;
    row: Dimensional;
    dimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
    ) => void;
}

const DimensionalRowCont = styled.tr`
    display: flex;
    gap: 10px;

    .row {
        &__input {
            width: 100%;
        }
    }
`;

const DimensionalRow = ({
    className,
    rowIndex,
    row,
    dimensionalInputChangeHandler,
}: DimensionalRowProps) => {
    return (
        <DimensionalRowCont className={className}>
            <Input
                className="row__input"
                value={row.material}
                onChange={(e) =>
                    dimensionalInputChangeHandler(e, rowIndex, "material")
                }
            />

            <Input
                className="row__input"
                value={row.dimension1}
                onChange={(e) =>
                    dimensionalInputChangeHandler(e, rowIndex, "dimension1")
                }
            />

            <Input
                className="row__input"
                value={row.dimension2}
                onChange={(e) =>
                    dimensionalInputChangeHandler(e, rowIndex, "dimension2")
                }
            />

            <Input
                className="row__input"
                value={row.sqft}
                readOnly={true}
                onChange={(e) =>
                    dimensionalInputChangeHandler(e, rowIndex, "sqft")
                }
            />

            <Input
                className="row__input"
                value={row.pricePerSqft}
                onChange={(e) =>
                    dimensionalInputChangeHandler(e, rowIndex, "pricePerSqft")
                }
            />
        </DimensionalRowCont>
    );
};

export default DimensionalRow;
