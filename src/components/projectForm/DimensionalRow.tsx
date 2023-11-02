import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Dimensional } from "@/types/Index";

interface DimensionalRowProps {
    rowIndex: number;
    row: Dimensional;
    dimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
    ) => void;
}

const DimensionalRowCont = styled.tr`
    .row {
        &__input {
            width: 100%;
        }
    }
`;

const DimensionalRow = ({
    rowIndex,
    row,
    dimensionalInputChangeHandler,
}: DimensionalRowProps) => {
    return (
        <DimensionalRowCont>
            <td>
                <input
                    className="row__input"
                    type="text"
                    value={row.material}
                    onChange={(e) =>
                        dimensionalInputChangeHandler(e, rowIndex, "material")
                    }
                />
            </td>
            <td>
                <input
                    className="row__input"
                    type="text"
                    value={row.dimension1}
                    onChange={(e) =>
                        dimensionalInputChangeHandler(e, rowIndex, "dimension1")
                    }
                />
            </td>
            <td>
                <input
                    className="row__input"
                    type="text"
                    value={row.dimension2}
                    onChange={(e) =>
                        dimensionalInputChangeHandler(e, rowIndex, "dimension2")
                    }
                />
            </td>
            <td>
                <input
                    className="row__input"
                    type="text"
                    value={row.sqft}
                    readOnly
                    onChange={(e) =>
                        dimensionalInputChangeHandler(e, rowIndex, "sqft")
                    }
                />
            </td>
            <td>
                <input
                    className="row__input"
                    type="text"
                    value={row.pricePerSqft}
                    onChange={(e) =>
                        dimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "pricePerSqft"
                        )
                    }
                />
            </td>
        </DimensionalRowCont>
    );
};

export default DimensionalRow;
