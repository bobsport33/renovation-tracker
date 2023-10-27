import React from "react";
import styled from "styled-components";

const NondimensionalRowCont = styled.tr``;

const NondimensionalRow = () => {
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
