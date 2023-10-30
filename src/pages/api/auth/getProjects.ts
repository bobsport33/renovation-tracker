import { Request, Response } from "express";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    console.log(req.body);
    const data = JSON.parse(req.body);

    const { email } = data;

    const client = await connectToDB();

    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email: email });

    res.status(201).json({
        message: "found user projects",
        projects: existingUser?.projects,
    });
    client.close();
}

export default handler;
