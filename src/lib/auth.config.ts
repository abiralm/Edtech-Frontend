import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { login_api } from "@/api/auth_api"
import { loginReqDataType } from "@/types/auth_types"

export const authConfig: NextAuthConfig = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log({credentials})
                if (!credentials) return null

                const { email, password } = credentials as {
                    email: string
                    password: string
                }

                const loginData: loginReqDataType = { email, password }
                const res = await login_api(loginData)

                if (res?.token) {
                    return {
                        id: email,
                        email,
                        accessToken: res.token,
                    }
                }

                return null
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.accessToken = user.accessToken
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            return session
        },
    },
    pages: {
        signIn: "/signin",
    },
    secret: process.env.AUTH_SECRET,
}
