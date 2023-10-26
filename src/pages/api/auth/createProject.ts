import { Request, Response } from "express";

async function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.body);
    const { projectName, measurements } = data;

    // Need to add checks to see if name or measurements are null
}
