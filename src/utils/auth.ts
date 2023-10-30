import { hash } from "bcryptjs";
import axios from "axios";
import { signIn } from "next-auth/react";

interface DimensionalMaterial {
    material: string;
    dimension1: string;
    dimension2: string;
    sqft: string;
    pricePerSqft: string;
}

interface NonDimensionalMaterial {
    material: string;
    size: string;
    quantity: string;
    pricePerUnit: string;
}

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 11);

    return hashedPassword;
}

export async function createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const response = await axios.post("/api/auth/signup", {
        body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = response.data;

    if (data.message !== "created user") {
        throw new Error(data.message || "something went wrong");
    }

    // Sign in the user after successful account creation
    await signIn("credentials", {
        redirect: false,
        email,
        password,
    });

    return data;
}

// add materials
export async function createProject(
    projectName: string,
    DimensionalMaterial: DimensionalMaterial[],
    NonDimensionalMaterial: NonDimensionalMaterial[],
    totalPrice: number
) {
    // Add checks to make sure there is data and data is correct types

    // send data to custom api call to add to db
    const response = await axios.post("/api/auth/createProject", {
        body: JSON.stringify({
            projectName,
            DimensionalMaterial,
            NonDimensionalMaterial,
            totalPrice,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = response.data;

    if (data.message !== "created project") {
        throw new Error(data.message || "something went wrong");
    }

    return data;
}
