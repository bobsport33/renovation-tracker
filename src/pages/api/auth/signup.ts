import { Request, Response } from "express";

import { hashPassword } from "@/utils/auth";
import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const { email, password, firstName, lastName } = data;

    const hashedPassword = await hashPassword(password);

    if (
        !email ||
        !email.includes("@") ||
        !password ||
        password.trim().length < 7
    ) {
        res.status(422).json({
            message:
                "Invalid input- password should also be at least 7 charatcters long",
        });
        return;
    }

    const client = await connectToDB();

    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email: email });
    if (existingUser) {
        res.status(422).json({ mesasge: "User already exists" });
        client.close();
        return;
    }
    const result = await db.collection("users").insertOne({
        email: email,
        passwordHash: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    });

    res.status(201).json({ message: "created user" });
    client.close();
}

export default handler;
