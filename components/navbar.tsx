'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }
    const handleNavbar = () => {
        if (navbarOpen) {
            return (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href={`#`} className="text-2xl block text-black hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                            Home
                        </Link>
                        <Link href={`#`} className="text-black block text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                            Contact
                        </Link>
                        <Link href={`#`} className="text-black block text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                            Products
                        </Link>
                        <Link href={`#`} className="text-black block text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                            About
                        </Link>
                    </div>
                </div>
            )
        }
    }
    return (
        <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image
                                src="/next.svg"
                                alt="Logo"
                                className="h-32 w-32"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href={`#`} className="text-2xl text-black hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                                Home
                            </Link>
                            <Link href={`#`} className="text-black text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                                Contact
                            </Link>
                            <Link href={`#`} className="text-black text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                                Products
                            </Link>
                            <Link href={`#`} className="text-black text-2xl hover:bg-pink-100 hover:text-pink-400 rounded-lg p-2">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-pink-100 bg-red-500 hover:text-pink-400 focus:outline-none focus:ring-inset focus:ring-white" onClick={toggleNavbar} >

                            {navbarOpen ? (<svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (<svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>)}
                        </button>
                    </div>
                </div>
            </div>
            {handleNavbar()}
        </nav>);
}

export default Navbar;