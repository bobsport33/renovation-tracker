import { Request, Response } from "express";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const { projectName, measurements } = data;

    // Need to add checks to see if name or measurements are null

    const client = await connectToDB();

    const db = client.db();

    const result = await db.collection("projects").insertOne({
        projectName: projectName,
        measurements: measurements,
    });

    console.log(result);

    res.status(201).json({ message: "created user" });
    client.close();
}

export default handler;
