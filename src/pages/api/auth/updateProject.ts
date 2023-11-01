import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const {
        projectId,
        projectName,
        dimensionalMaterial,
        nonDimensionalMaterial,
        totalPrice,
    } = data;

    const client = await connectToDB();

    const db = client.db();

    const result = await db.collection("projects").updateOne(
        {
            _id: new ObjectId(projectId),
        },
        {
            $set: {
                projectName: projectName,
                dimensionalMaterial: dimensionalMaterial,
                nonDimensionalMaterial: nonDimensionalMaterial,
                totalPrice: totalPrice,
            },
        }
    );

    res.status(201).json({
        message: "updated project",
    });

    client.close();
}

export default handler;
