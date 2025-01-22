// import {NextResponse} from "next/server";
// import {signIn} from "next-auth/react";
//
// export async function POST(request:Request) {
//
//     interface LoginProps {
//         userLoginId: string;
//         userPassword: string;
//     }
//
//     const data: LoginProps = await request.json();
//
//     const  {
//         userLoginId,
//         userPassword,
//     } = data;
//
//     // const hashedPassword = await bcrypto.hash(userPassword, 5);
//
//     const res = await signIn('credentials', {
//             userLoginId
//             , userPassword
//         })
//
//     return NextResponse.json(res)
// }