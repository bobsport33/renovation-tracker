import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Dimensional } from "@/types/Index";

interface DimensionalRowProps {
    rowIndex: number;
    row: Dimensional;
    handleDimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
    ) => void;
}

const DimensionalRowCont = styled.tr``;

const DimensionalRow = ({
    rowIndex,
    row,
    handleDimensionalInputChangeHandler,
}: DimensionalRowProps) => {
    return (
        <DimensionalRowCont>
            <td>
                <input
                    type="text"
                    value={row.material}
                    onChange={(e) =>
                        handleDimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "material"
                        )
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.dimension1}
                    onChange={(e) =>
                        handleDimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "dimension1"
                        )
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.dimension2}
                    onChange={(e) =>
                        handleDimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "dimension2"
                        )
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.sqft}
                    readOnly
                    onChange={(e) =>
                        handleDimensionalInputChangeHandler(e, rowIndex, "sqft")
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.pricePerSqft}
                    onChange={(e) =>
                        handleDimensionalInputChangeHandler(
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
