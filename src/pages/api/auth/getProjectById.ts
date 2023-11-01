import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);

    const { id } = data;

    const client = await connectToDB();

    const db = client.db();

    const result = await db
        .collection("projects")
        .findOne({ _id: new ObjectId(id) });

    res.status(201).json({
        message: "found project",
        project: result,
    });

    client.close();
}

export default handler;
