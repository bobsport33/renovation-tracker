import React, { FormEvent, ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

import Modal from "@/subComponents/Modal";
import Input from "@/subComponents/Input";
import AddButton from "@/subComponents/AddButton";
import RemoveButton from "@/subComponents/RemoveButton";

interface FormValue {
    material: string;
    dimension1: string;
    dimension2: string;
    sqft: string;
    pricePerSqft: string;
}

const ProjectFormCont = styled.div`
    margin: 120px auto;
    display: flex;
    justify-content: center;

    .project {
        width: 85%;
    }
`;

const ProjectForm = () => {
    const [formValues, setFormValues] = useState([
        {
            material: "",
            dimension1: "",
            dimension2: "",
            sqft: "",
            pricePerSqft: "",
        },
    ]);

    const projectName = useRef() as React.MutableRefObject<HTMLInputElement>;

    const addRowHandler = () => {
        setFormValues((curr) => [
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

    const removeRowHandler = () => {
        setFormValues((curr) => [...curr.slice(0, -1)]);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        fieldName: keyof FormValue
    ) => {
        const { value } = e.target;
        setFormValues((prevFormValues) => {
            const updatedFormValues = [...prevFormValues];
            (updatedFormValues[rowIndex] as any)[fieldName] = value;
            return updatedFormValues;
        });
    };

    const formSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(formValues);
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
                    <table className="project__grid">
                        <thead>
                            <tr>
                                <th className="project__subtitle">Material</th>
                                <th>Dimension 1</th>
                                <th>Dimension 2</th>
                                <th>Est. SqFt</th>
                                <th>Price per SqFt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formValues.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.material}
                                                onChange={(e) =>
                                                    handleInputChange(
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
                                                    handleInputChange(
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
                                                    handleInputChange(
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
                                                onChange={(e) =>
                                                    handleInputChange(
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
                                                    handleInputChange(
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
                    <button>save</button>
                </form>
                <button
                    className="project__btn project__btn--add"
                    onClick={addRowHandler}
                >
                    Add Row <AddButton />
                </button>
                {formValues.length > 1 && (
                    <button
                        className="project__btn project__btn--remove"
                        onClick={removeRowHandler}
                    >
                        Remove Row <RemoveButton />
                    </button>
                )}
            </Modal>
        </ProjectFormCont>
    );
};

export default ProjectForm;
