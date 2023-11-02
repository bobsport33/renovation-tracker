import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";
import DimensionalRow from "./DimensionalRow";
import { Dimensional } from "@/types/Index";
import { paragraphMedium, paragraphSmall } from "@/styles/Type";

interface DimensionalTableProps {
    dimensionalFormValues: Dimensional[];
    dimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
    ) => void;
    addDimensionalRowHandler: () => void;
    removeDimensionalRowHandler: () => void;
}

const DimensionalTableCont = styled.div`
    .table {
        &__table {
            width: 100%;
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

const DimensionalTable = memo(
    ({
        dimensionalFormValues,
        dimensionalInputChangeHandler,
        addDimensionalRowHandler,
        removeDimensionalRowHandler,
    }: DimensionalTableProps) => {
        return (
            <DimensionalTableCont>
                <p className="table__title">Dimensional Material Calculator</p>
                <table className="table__table">
                    <thead>
                        <tr>
                            <th className="table__subtitle">Material</th>
                            <th className="table__subtitle">Dimension 1</th>
                            <th className="table__subtitle">Dimension 2</th>
                            <th className="table__subtitle">Est. SqFt</th>
                            <th className="table__subtitle">Price per SqFt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dimensionalFormValues.map((row, rowIndex) => {
                            return (
                                <DimensionalRow
                                    key={rowIndex}
                                    rowIndex={rowIndex}
                                    row={row}
                                    dimensionalInputChangeHandler={
                                        dimensionalInputChangeHandler
                                    }
                                />
                            );
                        })}
                    </tbody>
                </table>
                <div
                    className="table__btn table__btn--add"
                    onClick={addDimensionalRowHandler}
                >
                    Add Row <AddButton />
                </div>
                {dimensionalFormValues.length > 1 && (
                    <div
                        className="table__btn table__btn--remove"
                        onClick={removeDimensionalRowHandler}
                    >
                        Remove Row <RemoveButton />
                    </div>
                )}
            </DimensionalTableCont>
        );
    }
);

export default DimensionalTable;
