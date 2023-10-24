import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in with username and password",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // logic to see if user is credentialed. Log them in if they are
                const user = JSON.stringify(credentials);

                console.log(credentials);

                return user;
            },
        }),
    ],
};

export default NextAuth(authOptions);
