'use client'
import React from "react";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";


const NavItem = async ({ mobile }: { mobile?: boolean }) => {

    return (
        <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/admin">Admin</Link></li>
            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/user">User</Link></li>
            {/*{session?.user ? (*/}
                <li className="py-2 text-center border-b-4 cursor-pointer">
                    <button onClick={() => signOut()}>Sign Out</button>
                </li>
            {/*) : (*/}
                <>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-in">Sign In</Link>
                    </li>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-up">Sign Up</Link>
                    </li>
                </>
            {/*)}*/}
        </ul>
    );
};

export default NavItem;
