import { MongoClient } from "mongodb";

export const connectToDB = async () => {
    const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);

    return client;
};
