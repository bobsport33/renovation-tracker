import React, {
    FormEvent,
    ChangeEvent,
    useRef,
    useState,
    useEffect,
    useCallback,
} from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Modal from "@/subComponents/Modal";
import Input from "@/subComponents/Input";
import { paragraphMedium, paragraphSmall } from "@/styles/Type";
import DimensionalTable from "./DimensionalTable";
import NondimensionalTable from "./NondimensionalTable";
import {
    createProject,
    updateUser,
    updateProject,
    deleteProject,
} from "@/utils/auth";
import { Dimensional, Nondimensional, Project } from "@/types/Index";

interface Props {
    email?: string;
    project?: Project;
}

const ProjectFormCont = styled.div`
    margin: 120px auto;
    display: flex;
    justify-content: center;

    .project {
        width: 85%;

        &__form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &__name {
            width: 40%;
        }
    }
`;

const ProjectForm = ({ email, project }: Props) => {
    console.log("index");
    const router = useRouter();
    const [dimensionalFormValues, setDimensionalFormValues] = useState(
        project?.project.dimensionalMaterial
            ? project.project.dimensionalMaterial
            : [
                  {
                      material: "",
                      dimension1: "",
                      dimension2: "",
                      sqft: "",
                      pricePerSqft: "",
                  },
              ]
    );

    const [nondimensionalFormValues, setNondimensionalFormValues] = useState(
        project
            ? project.project.nondimensionalMaterial
            : [
                  {
                      material: "",
                      size: "",
                      quantity: "",
                      pricePerUnit: "",
                  },
              ]
    );

    const [totalPrice, setTotalPrice] = useState(0);

    const projectName = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // set projectName ref to initial project value if it exists
        if (project && project.project && projectName.current) {
            projectName.current.value = project.project.projectName;
        }
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
    }, [dimensionalFormValues, nondimensionalFormValues, setTotalPrice]);

    const addDimensionalRowHandler = useCallback(() => {
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
    }, [setDimensionalFormValues]);

    const removeDimensionalRowHandler = () => {
        setDimensionalFormValues((curr) => [...curr.slice(0, -1)]);
    };

    const addNonDimensionalRowHandler = useCallback(() => {
        setNondimensionalFormValues((curr) => [
            ...curr,
            {
                material: "",
                size: "",
                quantity: "",
                pricePerUnit: "",
            },
        ]);
    }, [setNondimensionalFormValues]);

    const removeNonDimensionalRowHandler = () => {
        setNondimensionalFormValues((curr) => [...curr.slice(0, -1)]);
    };

    const dimensionalInputChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof Dimensional
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
        fieldName: keyof Nondimensional
    ) => {
        const { value } = e.target;
        setNondimensionalFormValues((prevdimensionalFormValues) => {
            const updateddimensionalFormValues = [...prevdimensionalFormValues];
            const currentRow = updateddimensionalFormValues[rowIndex] as any;
            currentRow[fieldName] = value;

            return updateddimensionalFormValues;
        });
    };

    const deleteProjectHandler = async () => {
        if (email && project?.project._id) {
            const result = await deleteProject(email, project.project._id);

            router.push("/projects");
        }
    };

    const formSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        let name;

        if (projectName.current && email) {
            // new submission
            name = projectName.current.value;

            const data = await createProject(
                name,
                dimensionalFormValues,
                nondimensionalFormValues,
                totalPrice
            );

            const { insertedId } = data;
            // Need to add ID to array of project ids on the user

            const result = await updateUser(email, insertedId);

            // send user to page for project they just created
            router.push(`/projects/${insertedId}`);
        } else if (projectName.current && project) {
            // update existing submission
            const projectId = project.project._id;

            name = projectName.current.value;

            const result = await updateProject(
                projectId,
                name,
                dimensionalFormValues,
                nondimensionalFormValues,
                totalPrice
            );
        }
    };

    return (
        <ProjectFormCont>
            <Modal className="project">
                <form className="project__form" onSubmit={formSubmitHandler}>
                    <Input
                        id="projectName"
                        text="Project Name"
                        ref={projectName}
                        className="project__name"
                    />
                    <hr />

                    <DimensionalTable
                        dimensionalFormValues={dimensionalFormValues}
                        dimensionalInputChangeHandler={
                            dimensionalInputChangeHandler
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
                    <button>Save</button>

                    <p className="project__total">
                        Total Price: ${totalPrice.toFixed(2)}
                    </p>
                </form>
                <button onClick={deleteProjectHandler}>Delete</button>
            </Modal>
        </ProjectFormCont>
    );
};

export default ProjectForm;
