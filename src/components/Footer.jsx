import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer
            className="bg-black border-t border-[#28392e] py-16 text-sm"
            id="contact"
        >
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white mb-2">
                            <img src={logo} alt="logo" className="w-10 bg-gray-700 rounded-full select-none" />
                            {/* <span className="material-symbols-outlined text-primary text-2xl">
                                playing_cards
                            </span> */}
                            <span className="font-bold text-lg select-none">US<span className="text-yellow-500">&</span>PA Club</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            The premier destination for snooker and pool enthusiasts.
                            Professional conditions, exceptional service.
                        </p>

                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/share/17iZAuA37y/">
                                <FaFacebook className="text-[1.5rem] text-white hover:text-yellow-400" />
                            </a>
                            <a href="https://www.instagram.com/ultimatesnooker_poolarena?igsh=MTNhOGJsNHVsbXQ2cA%3D%3D&utm_source=qr">
                                <SiInstagram className="text-[1.4rem] text-white hover:text-yellow-400" />
                            </a>
                            {/* <a href="/twitter">
                                <FiTwitter className="text-[1.5rem] text-white hover:text-yellow-400" />
                            </a> */}
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Visit Us</h4>
                        <ul className="flex flex-col gap-3 text-gray-400">
                            <li className="flex gap-2 items-start">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                                    location_on
                                </span>
                                Ultimate Snooker and Pool arena , Steelcraft Buliding,10 Diagonal Road ,
                                <br />
                                Near Royal Enfield Service Centre and Wine Shop
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    call
                                </span>

                                <a
                                    href="tel:+918877333321"
                                    className="hover:underline text-gray-400"
                                >
                                    +91 8877333321
                                </a>

                                <span>/</span>

                                <a
                                    href="tel:+918677859859"
                                    className="hover:underline text-gray-400"
                                >
                                    86778 59859
                                </a>
                            </li>

                            <li className="flex gap-2 items-center">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    mail
                                </span>

                                <a
                                    href="mailto:ultimatesnookerarena@gmail.com"
                                    className="hover:underline text-gray-400"
                                >
                                    ultimatesnookerarena@gmail.com
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Opening Hours</h4>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Sun</span>
                                <span className="text-white">12:00 PM - 11:00 PM</span>
                            </li>
                            {/* <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span className="text-white">12:00 PM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">12:00 PM - 11:00 PM</span>
                            </li> */}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            {[
                                {
                                    name: "About Us",
                                    link: "/about"
                                },
                                {
                                    name: "Contact Us",
                                    link: "/contact"
                                },
                                {
                                    name: "Privacy Policy",
                                    link: "https://www.termsfeed.com/live/92e5c5bf-d85e-4412-8ce9-3e56efbe8b7e"
                                }
                            ].map((data, index) => (
                                <li key={index}>
                                    <Link
                                        to={data.link}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#28392e] flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
                    <p>© 2025 US&PA Club. All rights reserved.</p>
                    {/* <p>Designed By Nitish Kushwaha.</p> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;