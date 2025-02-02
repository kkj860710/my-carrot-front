'use client'
import Link from "next/link";
import NavItem from "@/components/common/NavItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {toggleMenu} from "@/redux/slices/menuSlice";

// interface NavBarProps {
//     currentUser?: never;
// }

const NavBar  = () => {

    const dispatch = useDispatch();
    const menuOpen = useSelector((state: RootState) => state.menu.isOpen);

    const handleMenu = () => {
        dispatch(toggleMenu());
    }

    return (
        <nav className="relative z-10 w-full bg-orange-500 text-white">
            <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
                <div className="flex items-center text-2xl h-14">
                    <Link href="/">Logo</Link>
                </div>
                <div className='text-2xl sm:hidden'>
                    {menuOpen === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
                </div>
                <div className='hidden sm:block'>

                    <NavItem  />
                </div>
            </div>
            <div className='block sm:hidden'>
                {(menuOpen === false) ? null : <NavItem mobile />}
            </div>
        </nav>
    )
}

export default NavBar;