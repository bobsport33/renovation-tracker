import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import DimensionalRow from "./DimensionalRow";
import { Dimensional } from "@/types/Index";
import { paragraphLarge, paragraphSmall } from "@/styles/Type";
import { colors, media } from "@/styles/variables";
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
    .grid {
        &__grid {
            width: 100%;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            column-gap: 5px;
            row-gap: 5px;

            @media ${media.tablet} {
                padding: 10px;
            }
        }
        &__title {
            ${paragraphLarge}
        }

        &__subtitle {
            ${paragraphSmall}
            text-align: start;
            color: ${colors.neutral1000};
        }

        &__row {
            grid-column: 1 / 6;
        }

        &__total {
            ${paragraphSmall}
        }

        &__btn-container {
            display: flex;
            flex-direction: row;
            gap: 15px;
            padding: 0 20px;

            @media ${media.tablet} {
                padding: 0 10px;
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
                <p className="grid__title">Dimensional Material Calculator</p>
                {/* Need to adjust from a table to a grid. Make the subtitles 1 cell each, make the rows a flex row with the same spacing as the grid and make the rows 1 / 6 */}
                <div className="grid__grid">
                    <p className="grid__subtitle">Material</p>
                    <p className="grid__subtitle">Dimension 1</p>
                    <p className="grid__subtitle">Dimension 2</p>
                    <p className="grid__subtitle">Est. SqFt</p>
                    <p className="grid__subtitle">Price per SqFt</p>

                    {dimensionalFormValues.map((row, rowIndex) => {
                        return (
                            <DimensionalRow
                                className="grid__row"
                                key={rowIndex}
                                rowIndex={rowIndex}
                                row={row}
                                dimensionalInputChangeHandler={
                                    dimensionalInputChangeHandler
                                }
                            />
                        );
                    })}
                </div>
                <div className="grid__btn-container">
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
