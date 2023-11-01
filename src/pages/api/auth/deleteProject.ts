import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);

    const { email, projectId } = data;

    console.log(projectId);
    console.log(email);
    const client = await connectToDB();

    const db = client.db();

    const user = await db.collection("users").updateOne(
        {
            email: email,
        },
        { $pull: { projects: projectId } }
    );

    const result = await db
        .collection("projects")
        .deleteOne({ _id: new ObjectId(projectId) });

    res.status(201).json({
        message: "deleted project",
    });

    client.close();
}

export default handler;
