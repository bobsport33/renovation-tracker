import React, { ChangeEvent, memo } from "react";
import styled from "styled-components";

import { Nondimensional } from "@/types/Index";
import { paragraphLarge, paragraphSmall } from "@/styles/Type";
import NondimensionalRow from "./NondimensionalRow";
import IconButton from "@/subComponents/IconButton";
import Plus from "@/styles/svg/plus.svg";
import Minus from "@/styles/svg/minus.svg";
import { media } from "@/styles/variables";

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
    .grid {
        &__grid {
            width: 80%;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 5px;
            row-gap: 5px;

            @media ${media.tablet} {
                padding: 10px;
            }
        }
        &__row {
            grid-column: 1 / 5;
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
            gap: 15px;
            padding: 0 20px;

            @media ${media.tablet} {
                padding: 0 10px;
            }
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
                <p className="grid__title">
                    Non Dimensionsal Material Calculator
                </p>
                <div className="grid__grid">
                    <p className="grid__subtitle">Material</p>
                    <p className="grid__subtitle">Size</p>
                    <p className="grid__subtitle">Quantity</p>
                    <p className="grid__subtitle">Price per Unit</p>

                    {nondimensionalFormValues.map((row, rowIndex) => {
                        return (
                            <NondimensionalRow
                                key={rowIndex}
                                rowIndex={rowIndex}
                                row={row}
                                nondimensionalInputChangeHandler={
                                    nondimensionalInputChangeHandler
                                }
                                className="grid__row"
                            />
                        );
                    })}
                </div>
                <div className="grid__btn-container">
                    <IconButton
                        text="Add Row"
                        Icon={Plus}
                        onClick={addNonDimensionalRowHandler}
                        color="blue"
                    />

                    {nondimensionalFormValues.length > 1 && (
                        <IconButton
                            text="Remove Row"
                            Icon={Minus}
                            onClick={removeNonDimensionalRowHandler}
                            color="red"
                        />
                    )}
                </div>
            </NondimensionalTableCont>
        );
    }
);

export default NondimensionalTable;
