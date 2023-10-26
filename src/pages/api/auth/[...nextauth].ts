import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import { connectToDB } from "../db/db";
import { StringifyOptions } from "querystring";

export const authOptions: NextAuthOptions = {
    // @ts-ignore
    session: { jwt: true },
    providers: [
        CredentialsProvider({
            // @ts-ignore
            async authorize(credentials: any, req) {
                // logic to see if user is credentialed. Log them in if they are
                const client = await connectToDB();

                const usersCollection = client.db().collection("users");
                const user = await usersCollection.findOne({
                    email: credentials?.email,
                });

                if (!user) {
                    return null;
                }

                const isValid = await compare(
                    credentials.password,
                    user.passwordHash
                );

                if (!isValid) {
                    client.close();
                    throw new Error("invalid password");
                }

                client.close();
                // use bcrypt to compare entered password with stored password hash

                return user;
            },
        }),
    ],
    // may need to add callbacks to attach data to jwt
};

export default NextAuth(authOptions);
