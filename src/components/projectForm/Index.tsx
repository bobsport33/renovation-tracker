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
import { paragraphMedium, paragraphSmall } from "@/styles/Type";
import DimensionalTable from "./DimensionalTable";
import NondimensionalTable from "./NondimensionalTable";
import { createProject, updateUser } from "@/utils/auth";

interface Props {
    email: string;
}

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

const ProjectForm = ({ email }: Props) => {
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

    const formSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const name = projectName.current.value;

        const data = await createProject(
            name,
            dimensionalFormValues,
            nondimensionalFormValues,
            totalPrice
        );

        const { insertedId } = data;
        // Need to add ID to array of project ids on the user

        const result = await updateUser(email, insertedId);
        console.log(result);
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

                    <DimensionalTable
                        dimensionalFormValues={dimensionalFormValues}
                        handleDimensionalInputChangeHandler={
                            handleDimensionalInputChangeHandler
                        }
                        addDimensionalRowHandler={addDimensionalRowHandler}
                        removeDimensionalRowHandler={
                            removeDimensionalRowHandler
                        }
                    />
                    <hr />
                    <NondimensionalTable
                        nondimensionalFormValues={nondimensionalFormValues}
                        nondimensionalInputChangeHandler={
                            nondimensionalInputChangeHandler
                        }
                        addNonDimensionalRowHandler={
                            addNonDimensionalRowHandler
                        }
                        removeNonDimensionalRowHandler={
                            removeNonDimensionalRowHandler
                        }
                    />
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
