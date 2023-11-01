import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { Nondimensional } from "@/types/Index";

interface NondimensionalRowProps {
    rowIndex: number;
    row: Nondimensional;
    nondimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Nondimensional
    ) => void;
}

const NondimensionalRowCont = styled.tr``;

const NondimensionalRow = ({
    rowIndex,
    row,
    nondimensionalInputChangeHandler,
}: NondimensionalRowProps) => {
    return (
        <NondimensionalRowCont>
            <td>
                <input
                    type="text"
                    value={row.material}
                    onChange={(e) =>
                        nondimensionalInputChangeHandler(
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
                    value={row.size}
                    onChange={(e) =>
                        nondimensionalInputChangeHandler(e, rowIndex, "size")
                    }
                />
            </td>

            <td>
                <input
                    type="text"
                    value={row.quantity}
                    onChange={(e) =>
                        nondimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "quantity"
                        )
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.pricePerUnit}
                    onChange={(e) =>
                        nondimensionalInputChangeHandler(
                            e,
                            rowIndex,
                            "pricePerUnit"
                        )
                    }
                />
            </td>
        </NondimensionalRowCont>
    );
};

export default NondimensionalRow;
