import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";


export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.userLoginId) {
            return null;
        }

        const currentUser = await axios.post('/api/sign-in', {
            userLoginId: session.user.userLoginId,
            userPassword: session.user.userPassword
        })
        console.log("curretnInfo" ,currentUser)
        if(!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}