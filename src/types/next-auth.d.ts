import {DefaultSession} from "next-auth";

declare module "next-auth"{
    interface Session {
        user?: {
            id?: string;
            userLoginId?: string;
            userPassword?: string;
            role?: string;
        } & DefaultSession['user']
    }
}