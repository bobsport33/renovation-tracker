import { Request, Response } from "express";

import { connectToDB } from "../db/db";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const {
        projectName,
        DimensionalMaterial,
        NonDimensionalMaterial,
        totalPrice,
    } = data;

    // Need to add checks to see if name or measurements are null

    const client = await connectToDB();

    const db = client.db();

    const result = await db.collection("projects").insertOne({
        projectName: projectName,
        dimensionalMaterial: DimensionalMaterial,
        nondimensionalMaterial: NonDimensionalMaterial,
        totalPrice: totalPrice,
    });

    // console.log(result.insertedId);

    res.status(201).json({
        message: "created project",
        insertedId: result.insertedId,
    });

    client.close();
}

export default handler;
