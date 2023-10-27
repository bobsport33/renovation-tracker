import React, { ChangeEvent } from "react";
import styled from "styled-components";

import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";

interface NondimensionalFormValue {
    material: string;
    size: string;
    quantity: string;
    pricePerUnit: string;
}

interface NondimensionalTableProps {
    nondimensionalFormValues: NondimensionalFormValue[];
    nondimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof NondimensionalFormValue
    ) => void;
    addNonDimensionalRowHandler: () => void;
    removeNonDimensionalRowHandler: () => void;
}

const NondimensionalTableCont = styled.div``;

const NondimensionalTable = ({
    nondimensionalFormValues,
    nondimensionalInputChangeHandler,
    addNonDimensionalRowHandler,
    removeNonDimensionalRowHandler,
}: NondimensionalTableProps) => {
    return (
        <NondimensionalTableCont>
            <p className="project__title">
                Non Dimensionsal Material Calculator
            </p>
            <table className="project__grid">
                <thead>
                    <tr>
                        <th className="project__subtitle">Material</th>
                        <th className="project__subtitle">Size</th>
                        <th className="project__subtitle">Quantity</th>
                        <th className="project__subtitle">Price per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {nondimensionalFormValues.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
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
                                            nondimensionalInputChangeHandler(
                                                e,
                                                rowIndex,
                                                "size"
                                            )
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div
                className="project__btn project__btn--add"
                onClick={addNonDimensionalRowHandler}
            >
                Add Row <AddButton />
            </div>
            {nondimensionalFormValues.length > 1 && (
                <div
                    className="project__btn project__btn--remove"
                    onClick={removeNonDimensionalRowHandler}
                >
                    Remove Row <RemoveButton />
                </div>
            )}
        </NondimensionalTableCont>
    );
};

export default NondimensionalTable;
