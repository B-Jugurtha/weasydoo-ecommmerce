import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type:"text" },
        password: { label: "Password", type: "password" },
      },
      async authorize( credentials ) {
        console.log(credentials)
        const { username, password } = credentials;
        const res = await prisma.user.findFirst({
          where: {
            username: username
          },
        })
        console.log(res)
        if (!res && res.password !== password) throw  new Error("Invalid credentials")
        else return res
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error"
  },
  debug: process.env.NODE_ENV === "development"?true:false
})