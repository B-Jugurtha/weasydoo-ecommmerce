import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/src/prisma"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type:"text" },
        password: { label: "Password", type: "password" },
      },
      async authorize( credentials ) {
        const { username, password } = credentials;
        const res = await prisma.user.findFirst({
          where: {
            username: username
          },
        })
        if (!res && res.password !== password) return null
        return res
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error"
  }
})