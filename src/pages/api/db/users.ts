import { Request, Response } from "express";
import mongoose from "mongoose";
import getConfig from "next/config";
import bcrypt from "bcryptjs";

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(
    process.env.MONGODB_URI || serverRuntimeConfig.connectionString
);
mongoose.Promise = global.Promise;

const userModel = () => {
    const schema = new Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    });

    return mongoose.models.User || mongoose.model("User", schema);
};

const handler = async (req: Request, res: Response) => {
    try {
        const { username, password } = JSON.parse(req.body);

        const User = userModel(); // Get the User model
        const users = await User.find({ username: username }); // Retrieve all users from the database

        res.status(200).json(users); // Send the users as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default handler;
