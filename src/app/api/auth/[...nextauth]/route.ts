import NextAuth, { NextAuthOptions } from "next-auth";

/**
 * NextAuthOptions 설정
 */
export const authOptions: NextAuthOptions = {
  providers: [

  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    /**
     * 로그인(signIn) 시 실행되는 콜백
     */
    async signIn() {

      return true; // true면 로그인 허용
    },

    /**
     * JWT 생성/갱신 시 실행되는 콜백
     */
    async jwt({ token , account }) {
      // 로그인 시점에 account가 존재하므로, 해당 내용을 토큰에 추가
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },

    /**
     * 세션 객체 생성/갱신 시 실행되는 콜백
     */
    async session({ session }) {
      // token에 저장된 accessToken, provider를 session에 전달

     return session;

    },
  },
};

/**
 * NextAuth 핸들러
 */
const handler = NextAuth(authOptions);

// Next.js App Router에서
// GET, POST 두 HTTP 메서드를 export
export { handler as GET, handler as POST };
