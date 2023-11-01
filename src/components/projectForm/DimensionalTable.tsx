import React, { ChangeEvent } from "react";
import styled from "styled-components";

import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";
import DimensionalRow from "./DimensionalRow";
import { Dimensional } from "@/types/Index";

interface DimensionalTableProps {
    dimensionalFormValues: Dimensional[];
    handleDimensionalInputChangeHandler: (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
    ) => void;
    addDimensionalRowHandler: () => void;
    removeDimensionalRowHandler: () => void;
}

const DimensionalTableCont = styled.div``;

const DimensionalTable = ({
    dimensionalFormValues,
    handleDimensionalInputChangeHandler,
    addDimensionalRowHandler,
    removeDimensionalRowHandler,
}: DimensionalTableProps) => {
    return (
        <DimensionalTableCont>
            <p className="project__title">Dimensional Material Calculator</p>
            <table>
                <thead>
                    <tr>
                        <th className="project__subtitle">Material</th>
                        <th className="project__subtitle">Dimension 1</th>
                        <th className="project__subtitle">Dimension 2</th>
                        <th className="project__subtitle">Est. SqFt</th>
                        <th className="project__subtitle">Price per SqFt</th>
                    </tr>
                </thead>
                <tbody>
                    {dimensionalFormValues.map((row, rowIndex) => {
                        return (
                            <DimensionalRow
                                key={rowIndex}
                                rowIndex={rowIndex}
                                row={row}
                                handleDimensionalInputChangeHandler={
                                    handleDimensionalInputChangeHandler
                                }
                            />
                        );
                    })}
                </tbody>
            </table>
            <div
                className="project__btn project__btn--add"
                onClick={addDimensionalRowHandler}
            >
                Add Row <AddButton />
            </div>
            {dimensionalFormValues.length > 1 && (
                <div
                    className="project__btn project__btn--remove"
                    onClick={removeDimensionalRowHandler}
                >
                    Remove Row <RemoveButton />
                </div>
            )}
        </DimensionalTableCont>
    );
};

export default DimensionalTable;
