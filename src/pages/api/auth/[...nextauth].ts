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
                    return {
                        email: data.user.email,
                        id: data.user.id,
                    }
                }
                return null
            }
        }),

    ],
    callbacks: {

        async session({ session, token, user }: any) {
            const data: any = await axios.get(`${process.env.BASE_SERVER_URL}/users/${token.sub}`).then((res: any) => res.data).catch((err: any) => console.log(err))
            user = {
                id: data._id,
                username: data.username,
                email: data.email,
                avatar: data.avatar,
                firstName: data.firstName,
                lastName: data.lastName,
            }

            return user

        },

    },
    pages: {
        signIn: "/sign",
    },

    secret: process.env.NEXT_AUTH_SECRET,

}

export default NextAuth(authOptions);