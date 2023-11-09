import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import { Nondimensional } from "@/types/Index";
import { paragraphLarge, paragraphSmall } from "@/styles/Type";
import NondimensionalRow from "./NondimensionalRow";
import IconButton from "@/subComponents/IconButton";
import Plus from "@/styles/svg/plus.svg";
import Minus from "@/styles/svg/minus.svg";

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
            ${paragraphLarge}
        }

        &__subtitle {
            ${paragraphSmall}
            text-align: start;
        }

        &__total {
            ${paragraphSmall}
        }

        &__btn-container {
            display: flex;
            flex-direction: row;
            gap: 10px;
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
                <div className="table__btn-container">
                    <IconButton
                        text="Add Row"
                        Icon={Plus}
                        onClick={addNonDimensionalRowHandler}
                    />

                    {nondimensionalFormValues.length > 1 && (
                        <IconButton
                            text="Remove Row"
                            Icon={Minus}
                            onClick={removeNonDimensionalRowHandler}
                        />
                    )}
                </div>
            </NondimensionalTableCont>
        );
    }
);

export default NondimensionalTable;
