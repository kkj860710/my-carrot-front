import React from "react";
import Link from "next/link";
import {  signOut, useSession } from "next-auth/react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        // 데이터 로딩 중인 경우 빈 상태를 반환
        return null;
    }
    console.log(session?.user, status);
    return (
        <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/admin">Admin</Link></li>
            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/user">User</Link></li>
            {session?.user ? (
                <li className="py-2 text-center border-b-4 cursor-pointer">
                    <button onClick={() => signOut()}>Sign Out</button>
                </li>
            ) : (
                <>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-in">Sign In</Link>
                    </li>
                    <li className="py-2 text-center border-b-4 cursor-pointer">
                        <Link href="/auth/sign-up">Sign Up</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavItem;
