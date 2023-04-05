import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },

            },
            async authorize(credentials: any, req: any) {
                const { email, password } = credentials as any
                const data: any = await axios.post(`${process.env.BASE_SERVER_URL}/users/auth`, { email, password }).then((res: any) => res.data).catch((err: any) => console.log(err))

                if (data?.status === true) {
                    return data.user
                }

                return null
            }
        }),

    ],
    callbacks: {
        async session({ session, token, user }: any) {
            const newSession: any = {
                email: session.user.email
            }
            return newSession

        },

    },
    pages: {
        signIn: "/sign",
    },

    secret: process.env.NEXT_AUTH_SECRET,

}

export default NextAuth(authOptions);