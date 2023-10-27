import React, {
    FormEvent,
    ChangeEvent,
    useRef,
    useState,
    useEffect,
} from "react";
import styled from "styled-components";

import Modal from "@/subComponents/Modal";
import Input from "@/subComponents/Input";
import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";
import { paragraphMedium, paragraphSmall } from "@/styles/Type";

interface DimensionalFormValue {
    material: string;
    dimension1: string;
    dimension2: string;
    sqft: string;
    pricePerSqft: string;
}

interface NondimensionalFormValue {
    material: string;
    size: string;
    quantity: string;
    pricePerUnit: string;
}

const ProjectFormCont = styled.div`
    margin: 120px auto;
    display: flex;
    justify-content: center;

    .project {
        width: 85%;

        &__title {
            ${paragraphMedium}
        }

        &__subtitle {
            ${paragraphSmall}
        }

        &__total {
            ${paragraphSmall}
        }
    }
`;

const ProjectForm = () => {
    const [dimensionalFormValues, setDimensionalFormValues] = useState([
        {
            material: "",
            dimension1: "",
            dimension2: "",
            sqft: "",
            pricePerSqft: "",
        },
    ]);

    const [nondimensionalFormValues, setNondimensionalFormValues] = useState([
        {
            material: "",
            size: "",
            quantity: "",
            pricePerUnit: "",
        },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    const projectName = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        // Calculate total price whenever dimensionalFormValues or nondimensionalFormValues change
        let sum = 0;
        dimensionalFormValues.forEach((row) => {
            const sqft = parseFloat(row["sqft"]);
            const pricePerSqft = parseFloat(row["pricePerSqft"]);

            if (!isNaN(sqft) && !isNaN(pricePerSqft)) {
                sum += sqft * pricePerSqft;
            }
        });

        nondimensionalFormValues.forEach((row) => {
            const quantity = parseFloat(row["quantity"]);
            const pricePerUnit = parseFloat(row["pricePerUnit"]);

            if (!isNaN(quantity) && !isNaN(pricePerUnit)) {
                sum += quantity * pricePerUnit;
            }
        });

        setTotalPrice(sum);
    }, [dimensionalFormValues, nondimensionalFormValues]);

    const addDimensionalRowHandler = () => {
        setDimensionalFormValues((curr) => [
            ...curr,
            {
                material: "",
                dimension1: "",
                dimension2: "",
                sqft: "",
                pricePerSqft: "",
            },
        ]);
    };

    const removeDimensionalRowHandler = () => {
        setDimensionalFormValues((curr) => [...curr.slice(0, -1)]);
        console.log(dimensionalFormValues);
    };

    const addNonDimensionalRowHandler = () => {
        setNondimensionalFormValues((curr) => [
            ...curr,
            {
                material: "",
                size: "",
                quantity: "",
                pricePerUnit: "",
            },
        ]);
    };

    const removeNonDimensionalRowHandler = () => {
        setNondimensionalFormValues((curr) => [...curr.slice(0, -1)]);
    };

    const handleDimensionalInputChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof DimensionalFormValue
    ) => {
        const { value } = e.target;
        setDimensionalFormValues((prevdimensionalFormValues) => {
            const updateddimensionalFormValues = [...prevdimensionalFormValues];
            const currentRow = updateddimensionalFormValues[rowIndex] as any;
            currentRow[fieldName] = value;

            // Calculate square footage if both dimension1 and dimension2 have values
            if (fieldName === "dimension1" || fieldName === "dimension2") {
                const dimension1 = parseFloat(currentRow.dimension1);
                const dimension2 = parseFloat(currentRow.dimension2);

                if (!isNaN(dimension1) && !isNaN(dimension2)) {
                    currentRow.sqft = (dimension1 * dimension2).toString();
                } else {
                    // If any dimension is not a valid number, set sqft to empty string
                    currentRow.sqft = "";
                }
            }

            return updateddimensionalFormValues;
        });
    };

    const nondimensionalInputChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof NondimensionalFormValue
    ) => {
        const { value } = e.target;
        setNondimensionalFormValues((prevdimensionalFormValues) => {
            const updateddimensionalFormValues = [...prevdimensionalFormValues];
            const currentRow = updateddimensionalFormValues[rowIndex] as any;
            currentRow[fieldName] = value;

            return updateddimensionalFormValues;
        });
    };

    const formSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(dimensionalFormValues);
        console.log(nondimensionalFormValues);
        console.log(totalPrice);
    };

    return (
        <ProjectFormCont>
            <Modal className="project">
                <form onSubmit={formSubmitHandler}>
                    <Input
                        id="projectName"
                        text="Project Name"
                        ref={projectName}
                    />
                    <hr />
                    <p className="project__title">
                        Dimensional Material Calculator
                    </p>
                    <table className="project__grid">
                        <thead>
                            <tr>
                                <th className="project__subtitle">Material</th>
                                <th className="project__subtitle">
                                    Dimension 1
                                </th>
                                <th className="project__subtitle">
                                    Dimension 2
                                </th>
                                <th className="project__subtitle">Est. SqFt</th>
                                <th className="project__subtitle">
                                    Price per SqFt
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dimensionalFormValues.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.material}
                                                onChange={(e) =>
                                                    handleDimensionalInputChangeHandler(
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
                                                value={row.dimension1}
                                                onChange={(e) =>
                                                    handleDimensionalInputChangeHandler(
                                                        e,
                                                        rowIndex,
                                                        "dimension1"
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.dimension2}
                                                onChange={(e) =>
                                                    handleDimensionalInputChangeHandler(
                                                        e,
                                                        rowIndex,
                                                        "dimension2"
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.sqft}
                                                readOnly
                                                onChange={(e) =>
                                                    handleDimensionalInputChangeHandler(
                                                        e,
                                                        rowIndex,
                                                        "sqft"
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.pricePerSqft}
                                                onChange={(e) =>
                                                    handleDimensionalInputChangeHandler(
                                                        e,
                                                        rowIndex,
                                                        "pricePerSqft"
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
                    <hr />
                    <p className="project__title">
                        Non Dimensionsal Material Calculator
                    </p>
                    <table className="project__grid">
                        <thead>
                            <tr>
                                <th className="project__subtitle">Material</th>
                                <th className="project__subtitle">Size</th>
                                <th className="project__subtitle">Quantity</th>
                                <th className="project__subtitle">
                                    Price per Unit
                                </th>
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
                    <button>save</button>
                    <p className="project__total">
                        Total Price: ${totalPrice.toFixed(2)}
                    </p>
                </form>
            </Modal>
        </ProjectFormCont>
    );
};

export default ProjectForm;
