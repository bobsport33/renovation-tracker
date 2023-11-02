import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";
import { Nondimensional } from "@/types/Index";
import { paragraphMedium, paragraphSmall } from "@/styles/Type";
import NondimensionalRow from "./NondimensionalRow";

interface NondimensionalTableProps {
    nondimensionalFormValues: Nondimensional[];
    nondimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Nondimensional
    ) => void;
    addNonDimensionalRowHandler: () => void;
    removeNonDimensionalRowHandler: () => void;
}

const NondimensionalTableCont = styled.div`
    .table {
        &__table {
            width: 80%;
            padding: 20px;
        }
        &__title {
            ${paragraphMedium}
        }

        &__subtitle {
            ${paragraphSmall}
            text-align: start;
        }

        &__total {
            ${paragraphSmall}
        }
    }
`;

const NondimensionalTable = memo(
    ({
        nondimensionalFormValues,
        nondimensionalInputChangeHandler,
        addNonDimensionalRowHandler,
        removeNonDimensionalRowHandler,
    }: NondimensionalTableProps) => {
        return (
            <NondimensionalTableCont>
                <p className="table__title">
                    Non Dimensionsal Material Calculator
                </p>
                <table className="table__table">
                    <thead>
                        <tr>
                            <th className="table__subtitle">Material</th>
                            <th className="table__subtitle">Size</th>
                            <th className="table__subtitle">Quantity</th>
                            <th className="table__subtitle">Price per Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nondimensionalFormValues.map((row, rowIndex) => {
                            return (
                                <NondimensionalRow
                                    key={rowIndex}
                                    rowIndex={rowIndex}
                                    row={row}
                                    nondimensionalInputChangeHandler={
                                        nondimensionalInputChangeHandler
                                    }
                                />
                            );
                        })}
                    </tbody>
                </table>
                <div
                    className="table__btn table__btn--add"
                    onClick={addNonDimensionalRowHandler}
                >
                    Add Row <AddButton />
                </div>
                {nondimensionalFormValues.length > 1 && (
                    <div
                        className="table__btn table__btn--remove"
                        onClick={removeNonDimensionalRowHandler}
                    >
                        Remove Row <RemoveButton />
                    </div>
                )}
            </NondimensionalTableCont>
        );
    }
);

export default NondimensionalTable;
