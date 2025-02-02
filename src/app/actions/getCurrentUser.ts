import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        console.log("session :", session);
        if (!session) {
            return null;
        }

        // const currentUser = await signIn("credentials", {
        //     username: session.user.userLoginId,
        //     password: session.user.userPassword,
        // });

        // const currentUser = await axios.post('/api/sign-in', {
        //     userLoginId: session.user.userLoginId,
        //     userPassword: session.user.userPassword
        // })
        // console.log("currentUser", currentUser)
        // if(!currentUser) {
        //     return null;
        // }

        return session.user;
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}