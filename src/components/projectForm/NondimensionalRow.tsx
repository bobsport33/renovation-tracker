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
}

const NondimensionalRowCont = styled.tr`
    .row__input {
        width: 100%;
    }
`;

const NondimensionalRow = ({
    rowIndex,
    row,
    nondimensionalInputChangeHandler,
}: NondimensionalRowProps) => {
    return (
        <NondimensionalRowCont>
            <td>
                <Input
                    className="row__input"
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
                <Input
                    className="row__input"
                    type="text"
                    value={row.size}
                    onChange={(e) =>
                        nondimensionalInputChangeHandler(e, rowIndex, "size")
                    }
                />
            </td>

            <td>
                <Input
                    className="row__input"
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
                <Input
                    className="row__input"
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
