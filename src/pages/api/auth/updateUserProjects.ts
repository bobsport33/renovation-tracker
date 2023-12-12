import { Request, Response } from "express";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const { email, projectId } = data;

    const client = await connectToDB();

    const db = client.db();

    const result = await db.collection("users").updateOne(
        {
            email: email,
        },
        { $push: { projects: projectId } }
    );

    res.status(201).json({
        message: "updated user",
    });

    client.close();
}
export default handler;
