import React, { useState } from "react";
import { Link } from "react-router-dom";

// ["Home", "Amenities", "Membership", "Events", "Contact"]
const section = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Membership",
        link: "/book"
    },
    {
        name: "Events",
        link: "/Event"
    },
    {
        name: "Gallery",
        link: "/gallery"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-[#fffffff1] backdrop-blur-md">
            <div className="px-4 md:px-10 py-3 max-w-[1280px] mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <div class="text-yellow-500">
                        <span class="material-symbols-outlined text-3xl">sports_esports</span>
                    </div>
                    <h2 className="text-lg font-bold hidden sm:block">
                        The Break Room
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {section.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="h-10 px-5 bg-yellow-400 text-[#102216] font-bold rounded-lg shadow hover:bg-green-600 hover:shadow-md hover:shadow-green-300 transition">
                        Register Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {open ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
                    {section.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;