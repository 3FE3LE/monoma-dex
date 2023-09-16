import { connectDB } from '@/lib/mongoose'
import User from '@/models/user'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
const handler = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await connectDB()
        const userFound = await User.findOne({
          email: credentials?.email,
        }).select('+password')
        if (!userFound) throw new Error('Invalid credentials')

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password,
        )
        if (!passwordMatch) throw new Error('Invalid credentials')

        return userFound
      },
    }),
  ],
  callbacks: {
    jwt({  token, user }) {
      if (user) token.user = user
      return token
    },
    session({ session, user }) {
      session.user = user 
      return session
    },
  },
  pages: {
    signIn: '/sign-in'
  }

})
export { handler as GET, handler as POST }
