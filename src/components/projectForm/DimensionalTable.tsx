import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import DimensionalRow from "./DimensionalRow";
import { Dimensional } from "@/types/Index";
import { paragraphLarge, paragraphSmall } from "@/styles/Type";
import { colors } from "@/styles/variables";
import Plus from "@/styles/svg/plus.svg";
import Minus from "@/styles/svg/minus.svg";
import IconButton from "@/subComponents/IconButton";

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
            ${paragraphLarge}
        }

        &__subtitle {
            ${paragraphSmall}
            text-align: start;
            color: ${colors.neutral1000};
        }

        &__total {
            ${paragraphSmall}
        }

        &__btn-container {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        &__btn {
            display: flex;
            align-items: center;
            gap: 6px;
            background-color: ${colors.blue500};
            color: ${colors.neutral100};
            ${paragraphSmall}
            padding: 5px 10px;

            & svg {
                width: 20px;
                height: auto;
            }
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
                <div className="table__btn-container">
                    <IconButton
                        text="Add Row"
                        Icon={Plus}
                        onClick={addDimensionalRowHandler}
                        color="blue"
                    />

                    {dimensionalFormValues.length > 1 && (
                        <IconButton
                            text="Remove Row"
                            Icon={Minus}
                            onClick={removeDimensionalRowHandler}
                            color="red"
                        />
                    )}
                </div>
            </DimensionalTableCont>
        );
    }
);

export default DimensionalTable;
