import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Input UserName" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials?.username || !credentials?.password) {
          throw new Error("Username or password is required");
        }

        const response = await axios.post(process.env.NEXT_PUBLIC_API + 'user/sign-in', {
          userLoginId: credentials?.username,
          userPassword: credentials?.password
        })

        let user = null;
        if( response.status === 200 || response.status === 201) {
          // delete response.data.userPassword;
          user = response.data;
        } else {
          throw new Error("유효한 사용자가 없습니다.")
        }
        return user
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60,   // ✅ 30일을 초 단위로 설정
  },
  pages : {
    signIn: "app/auth/sign-in"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return {...token, ...user}
    },
}};

/**
 * NextAuth 핸들러
 */
const handler = NextAuth(authOptions);

// Next.js App Router에서
// GET, POST 두 HTTP 메서드를 export
export { handler as GET, handler as POST };
