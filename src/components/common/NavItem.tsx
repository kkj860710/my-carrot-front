import React from 'react';
import Link from "next/link";


const NavItem = ( { mobile }  : {mobile?: boolean}) => {
    return (
        <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>

            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/admin">Admin</Link></li>
            <li className="py-2 text-center border-b-4 cursor-pointer"><Link href="/admin">Admin</Link></li>
            <li className="py-2 text-center border-b-4 cursor-pointer"><button>Sign Out</button></li>
            <li className="py-2 text-center border-b-4 cursor-pointer"><button>Sign In</button></li>
        </ul>
    )
}

export default NavItem;