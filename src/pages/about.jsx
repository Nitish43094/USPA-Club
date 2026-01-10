import React, { useState } from "react";
import teamImg1 from '../assets/teamImage1.jpeg'
import teamImg2 from '../assets/mohit-manik.jpeg'
import teamImg3 from '../assets/aman-kumar.jpeg'
import suraj from '../assets/suraj.jpg'
import aditya from '../assets/Aditya-sinha.jpeg'
import vishal from '../assets/Vishal-sinha.jpeg'
import sweta from '../assets/Sweta-manik.jpeg'
import shubham from '../assets/Shubham.jpeg'
import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";

const About = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* ================= HERO ================= */}
            <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden mt-8">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBniC9RyfauBn1ofO2m3nI40zrbMCvNKjeNCUjCrkK7mzhqFgJYj_xGd32U42xSyt0R_KWXo_pJ6wiq_vmOtYSoTXlQEpXUtsyEgOLv5_yBJqH0w53A7eAToeOBDUqmy9p9IKS20gYS2eWma6I5KxmY94KWPdiL-jwsg-8VpwOd18evolXPu-msSGY5coZGBKjw3xjIlqWAK7w9H3VKQxT2lOCZ78RwCUZTKUU9UcQrQSXIw3rBlF5SxsjvHOIHQJGHAvwGmpqUz4Mm')"
                    }}
                >
                    <div className="absolute inset-0 bg-[#0f0f0f74] from-[#102216]/60 via-[#102216]/80 to-background-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl text-center px-4 flex flex-col items-center gap-6">
                    <span className="inline-block w-max px-3 py-1 border-[0.001rem] border-yellow-300 bg-[#f1cb0c4b] text-yellow-400 text-[0.8rem] uppercase font-bold rounded-full">
                        About Us
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-white">
                        More Than Just <span className="text-yellow-400">A Game</span>
                    </h1>

                    <p className="text-gray-200 xl:text-[1.3rem] md:text-xl max-w-2xl font-normal leading-relaxed text-shadow">
                        We are the sanctuary for those who respect the hush of the room, the chalk on the cue, and the perfect break. Welcome to the city's premier snooker destination.
                    </p>
                </div>
            </section>

            {/* ================= STATS ================= */}
            {/* <section className="bg-black border-y border-[#28392e] py-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div>
                        <div className="text-3xl font-black text-white">
                            <Counter end={1998} />
                        </div>
                        <div className="text-sm text-gray-400">Founded</div>
                    </div>

                    <div>
                        <div className="text-3xl font-black text-white">
                            <Counter end={16} />
                        </div>
                        <div className="text-sm text-gray-400">Pro Tables</div>
                    </div>

                    <div>
                        <div className="text-3xl font-black text-white">
                            <Counter end={500} suffix="+" />
                        </div>
                        <div className="text-sm text-gray-400">Active Members</div>
                    </div>

                    <div>
                        <div className="text-3xl font-black text-white">
                            <Counter end={25} suffix="+" />
                        </div>
                        <div className="text-sm text-gray-400">Years Experience</div>
                    </div>

                </div>
            </section> */}

            {/* -- Origin Story Section -- */}

            {/* -- Philosophy Section -- */}
            <section className="py-16 bg-white dark:bg-[#152319] w-full">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">
                            Our Values
                        </span>
                        <h2 className="text-3xl font-bold mt-2">
                            Our Philosophy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            Precision, Patience, Passion. We aim to provide an environment that respects the game and elevates the players.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">table_lamp</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">World-Class Equipment</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Play on professional Apex and Sharma pool tables maintained daily with Strachan 6811 cloth.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">graphic_eq</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Focused Atmosphere</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Sound-dampened acoustics and perfect lighting designed specifically for deep concentration.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">wine_bar</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Premium Hospitality</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Full-service pool and premium leather lounge for post-game relaxation and strategy talks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -- Team Section -- */}
            <section className="py-20 bg-[#f0f2f0] dark:bg-[#0d1b11] border-t border-gray-200 dark:border-[#28392e]">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <h2 className="text-3xl font-bold mb-12">Meet the Teams</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <a href="https://www.instagram.com/manikmohit?igsh=cnEwNWZ0YXV2cXkx">
                            <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                    <img
                                        src={teamImg2}
                                        alt="Mohit Manik"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Mohit Manik</div>
                                    <div className="text-xs text-gray-500">Founder</div>
                                </div>
                            </div>
                        </a>

                        {/* Team Member 2 */}
                        <a href="https://www.instagram.com/147sushant/?igsh=cmxwbnZqMHY5a2hu#">
                            <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                    <img
                                        src={teamImg1}
                                        alt="Sushant Sinha"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Sushant Sinha</div>
                                    <div className="text-xs text-gray-500">Founder</div>
                                </div>
                            </div>
                        </a>

                        {/* Team Member 3 */}
                        <a href="https://cudo.in/">
                            <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                    <img
                                        src={teamImg3}
                                        // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWOOCntn2EUTd63mh9lV9XCpmv-bx5Vwgj56KjJlCE6oHnpESDhcjeAia5GKovUSBCcGczAFUxunqeglpAuhF8jEvW4CIO4t5Ok-sI17Hs3PPaoPfVv8zKVJYiQCzPUkQu1sn2jGM153DjL1ykiNN1mTCwohL5w9dicGRmiMrgDujaXheEiiHjnR6XubHe-wpwqDJowrOVxHvC3-30fKIo1F9DlNANu_qwx1Ymx5WqlzCJkgn2UZJksOCZQILwpyDYeE9b2VNxTEU"
                                        alt="AK"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Aman Kumar</div>
                                    <div className="text-xs text-gray-500">Digital Partener</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-5">
                    <h2 className="text-3xl font-bold mb-12">Management teams</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Team Member 1 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src={sweta}
                                    alt="Sweta manik"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Sweta Manik</div>
                                <div className="text-xs text-gray-500">Co founder</div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src={vishal}
                                    alt="AS"
                                    className="w-full h-full  hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Vishal Sinha</div>
                                <div className="text-xs text-gray-500">Co founder</div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src={aditya}
                                    alt="AS"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Aditya Sinha</div>
                                <div className="text-xs text-gray-500">Management</div>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src={shubham}
                                    // src="https://ui-avatars.com/api/?name=Shubham+Manik&size=512&background=AD1457&color=fff"
                                    alt="AS"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Shubham Manik</div>
                                <div className="text-xs text-gray-500">Management</div>
                            </div>
                        </div>
                        {/* Team Member 5 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src={suraj}
                                    alt="SN"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Suraj Nag</div>
                                <div className="text-xs text-gray-500">Worker</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <div className="text-center">
                    <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Ready to break?
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mb-8 mx-auto">
                        Whether you're a seasoned pro or picking up a cue for the first time,
                        there's a table waiting for you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        {/* Learn More Button */}
                        <button
                            onClick={() => navigate("/about")}
                            className="
                            relative overflow-hidden
                            h-12 px-8 rounded-lg
                            bg-yellow-400 text-[#102216] text-base font-bold
                            transition-all duration-300 ease-out hover:text-white hover:bg-black
                            "
                        >
                            <span className="relative z-10 transition-colors duration-300">
                                Learn More
                            </span>
                        </button>

                        {/* View Membership Button */}
                        <button
                            onClick={() => navigate("/book")}
                            className="
                            relative overflow-hidden
                            h-12 px-8 rounded-lg
                            bg-[#0d1b11] text-white text-base font-bold
                            border border-white/20 backdrop-blur-md
                            transition-all duration-300 ease-out

                            before:absolute before:inset-0
                            before:translate-x-[-100%]
                            hover:text-black hover:bg-yellow-500"
                        >
                            <span className="relative z-10 transition-colors duration-300">
                                View Membership
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
