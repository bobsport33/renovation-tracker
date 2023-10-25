import { hash } from "bcryptjs";
import axios from "axios";

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

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "something went wrong");
    }
    return data;
}
