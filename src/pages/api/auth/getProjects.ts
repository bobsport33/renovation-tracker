import { Request, Response } from "express";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);

    const { email } = data;

    const client = await connectToDB();

    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email: email });

    // Do I return the list of project ids and then fetch those individually in a loop somewhere in the project, or do I fetch that data now and pass it

    res.status(201).json({
        message: "found user projects",
        projects: existingUser?.projects,
    });
    client.close();
}

export default handler;
