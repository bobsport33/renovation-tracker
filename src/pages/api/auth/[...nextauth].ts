import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import { connectToDB } from "../db/db";
import { StringifyOptions } from "querystring";

interface credentials {
    email: string;
    password: StringifyOptions;
}

export const authOptions: NextAuthOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            // name: "Sign in with username and password",
            // credentials: {
            //     email: {
            //         label: "Email",
            //         type: "email",
            //         placeholder: "email",
            //     },
            //     password: { label: "Password", type: "password" },
            // },
            async authorize(credentials, req) {
                // logic to see if user is credentialed. Log them in if they are
                const client = await connectToDB();

                const usersCollection = client.db().collection("users");
                const user = await usersCollection.findOne({
                    email: credentials?.email,
                });

                if (!user) {
                    throw new Error("No user found");
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

                return {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                };
            },
        }),
    ],
};

export default NextAuth(authOptions);
