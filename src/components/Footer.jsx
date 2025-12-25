import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
    return (
        <footer
            className="bg-[#0b140e] border-t border-[#28392e] py-16 text-sm"
            id="contact"
        >
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white mb-2">
                            <span className="material-symbols-outlined text-primary text-2xl">
                                sports_esports
                            </span>
                            <span className="font-bold text-lg">USPA Club</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            The premier destination for snooker and pool enthusiasts.
                            Professional conditions, exceptional service.
                        </p>

                        <div className="flex gap-4 mt-2">
                            <a href="/facebook">
                                <FaFacebook className="text-[1.5rem] text-white hover:text-yellow-400" />
                            </a>
                            <a href="/instagram">
                                <SiInstagram className="text-[1.5rem] text-white hover:text-yellow-400" />
                            </a>
                            <a href="/twitter">
                                <FiTwitter className="text-[1.5rem] text-white hover:text-yellow-400" />
                            </a>
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
                                128 Cue Ball Lane,
                                <br />
                                West End, London
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    call
                                </span>
                                +44 (0) 20 1234 5678
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    mail
                                </span>
                                play@thebreakroom.com
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Opening Hours</h4>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span className="text-white">12:00 PM - 12:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span className="text-white">12:00 PM - 02:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">12:00 PM - 11:00 PM</span>
                            </li>
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
                                    link: "/contactt"
                                },
                                {
                                    name: "Privacy Policy",
                                    link: "#"
                                }
                            ].map((data, index) => (
                                <li key={index}>
                                    <a
                                        href={data.link}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#28392e] flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
                    <p>© 2023 USPA Club. All rights reserved.</p>
                    <p>Designed By Nitish Kushwaha.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;