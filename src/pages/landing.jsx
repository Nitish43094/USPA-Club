import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abhisek from '../assets/Review/Abhishel.png'
import sheikh from '../assets/Review/Sheikh.png'
export default function Landing() {
    
    const navigate = useNavigate()
    return (
        <div className="flex flex-col mt-[-5px] min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">

            {/* ================= HERO ================= */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuBcmNoJ-MwA51zssvqEBchGjxJXYiSP7t6-m8WXe1VyIhLMTnY9AIIHnL4Gxu3Ca39roIOhCh-p7T3OufLfZy1GJIhLETmqQIrvvPPaJBDhQVGlVuQo9HeLYR9XbQEAc49tgQoY4gWJg7iXbCa8j0V8-h78quBqNxxsc6H4RRa4vfQg6HNgLb2_gkAL5Ub4ul5r5bjgRh5aREEpOPt7ScIebU_rC03N57vGkcPtB6YGHuaT1fGwNNpxF3wZ3dHnt7jhk2vxfMRwkb')"
                    }}
                >
                    <div className="absolute inset-0 bg-[#0f0f0f74] from-[#102216]/60 via-[#102216]/80 to-background-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl text-center px-4 flex flex-col items-center gap-6">
                    <span className="inline-block w-max px-3 py-1 border-[0.001rem] border-yellow-300 bg-[#f1cb0c4b] text-yellow-400 text-[0.8rem] uppercase font-bold rounded-full">
                        Ultimate Snooker & Pool Arena
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-white">
                        Precision. Passion. <span className="text-yellow-400">Atmosphere.</span>
                    </h1>

                    <p className="text-gray-200 xl:text-[1.3rem] md:text-xl max-w-2xl  font-normal leading-relaxed text-shadow">
                        Experience the city's finest cuesports destination. Sharma and Apex, snooker and pool tables , upscale dining, and a community of true enthusiasts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate("/about")}
                            className="
                                relative overflow-hidden inline-flex items-center justify-center
                                h-12 px-8 rounded-lg bg-yellow-400 text-[#102216] text-base font-bold
                                transition-all duration-300 ease-out hover:text-white hover:bg-black"
                        >
                            <span className="relative z-10 transition-colors duration-300">
                                Learn More
                            </span>
                        </button>

                        <Link
                            to="/book"
                            className="
                                inline-flex items-center justify-center
                                h-12 px-8 rounded-lg
                                bg-white/10 hover:bg-white/20
                                text-white border border-white/20 backdrop-blur-md
                                text-base font-bold transition-all
                            "
                        >
                            View Membership
                        </Link>

                    </div>
                </div>
            </section>

            {/* -- Features Section -- */}
            <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full" id="amenities">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex flex-col gap-6 flex-1 sticky top-24">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                            Why Play With Us
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            We offer an exceptional environment for both casual players and serious competitors. From meticulously maintained cloth to sound-dampened rooms, every detail is crafted to ensure the perfect break.
                        </p>
                        <Link
                            to="/gallery"
                            className="text-primary font-bold flex items-center gap-2 group w-fit"
                        >
                            View All Amenities
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </Link>

                    </div>
                    <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">table_restaurant</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Professional-Grade Equipment</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Play on match-grade Apex and Sharma pool tables, heated and maintained daily for championship roll.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">local_bar</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Spacious, Elegant Enviroment</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for focused practice, social matches, and gourmet bites while you play.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">meeting_room</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Optimized Lighting & Ambiance</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Tailored for peak performance.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Pro Coaching</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Book sessions with resident pros to improve your stance, cue action, and break building.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Events Section -- */}
            <section
                className="py-16 bg-white dark:bg-[#152319] w-full"
                id="events"
            >
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">
                                Competition &amp; Social
                            </span>
                            <h2 className="text-3xl font-bold mt-2">
                                Upcoming Tournaments &amp; Events
                            </h2>
                        </div>

                        <Link
                            to="/event"
                            className="text-sm font-bold border-b border-gray-300 dark:border-gray-600 pb-1 hover:text-primary hover:border-primary transition-colors"
                        >
                            View Full Calendar
                        </Link>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Event Card 1 */}
                        <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-background-dark aspect-video md:aspect-[4/5] flex flex-col justify-end">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSIqL5ukWBfO6oIy1XQU4hIsPgIoxASvwInxseMnhOR4l_AvrgZ7g8o7Eqj9tdRQ-qU9EwG8RhTZVOVF_om7zM3_aUy01JTTftwH6yml3-kpJ7WLB1yzkopTiK6HJGQ_VzyREnycuYyoCtb88kx78-pMeBWTVl_Dm70VwHbS32HPe06tVlMaX586sm6S2DrYgnQJyN4TEP07kfcbZZvCeTU5KIZARoUoIbUqJu8QZ1mIp3jVuhFQQcLU1Fauzs-ns3sZmNmwA2i8OD"
                                alt="Person aiming a pool cue across a dark table"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="relative z-10 p-6">
                                {/* <div className="bg-primary text-[#102216] text-xs font-bold px-2 py-1 rounded w-fit mb-2">
                                    OCT 24
                                </div> */}
                                <h3 className="text-white text-xl font-bold mb-1">
                                    Friday Night Shootout
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Open entry. &#x20B9;500 Prize Pot.
                                </p>
                            </div>
                        </div>

                        {/* Event Card 2 */}
                        <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-background-dark aspect-video md:aspect-[4/5] flex flex-col justify-end">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi5XFHMLpFKeecUw2kFZP1U7lM5KbflmO17Nm-6aMxFrOpa47JXpBtNtyUWG-8_xrXJMy8AeU4n-Ogrfl1iNRSSaYBQsFrVrGE08C61SUWgfL8MXAxOS1utWRhGHOTZfRuwJxRxKMT4KJuI6W5CEmR0B0B_mcGczAGMHCCM9EgR5mgDKrjLD59IiFxKmMZFl00GM9GqS703EA0hPSLK1TAgx81sv43RHUPgYvnA2d0WnJvtioX-M90SOvVQrp_20PfYnN8YocwiDfZ"
                                alt="Close up of chalking a pool cue stick"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="relative z-10 p-6">
                                {/* <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded w-fit mb-2">
                                    NOV 02
                                </div> */}
                                <h3 className="text-white text-xl font-bold mb-1">
                                    Amateur League Finals
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Come watch the season finale.
                                </p>
                            </div>
                        </div>

                        {/* Event List */}
                        <div className="rounded-xl bg-gray-50 dark:bg-[#102216] border border-gray-200 dark:border-[#28392e] p-6 flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">More Events</h3>

                            <div className="flex gap-4 items-center pb-4 border-b border-gray-200 dark:border-[#28392e]">
                                <div className="w-12 text-center">
                                    <span className="block text-xs font-bold text-gray-400 uppercase">
                                        Nov
                                    </span>
                                    <span className="block text-xl font-bold text-primary">
                                        05
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Beginner Workshop</h4>
                                    <span className="text-xs text-gray-500">
                                        6:00 PM - 8:00 PM
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center pb-4 border-b border-gray-200 dark:border-[#28392e]">
                                <div className="w-12 text-center">
                                    <span className="block text-xs font-bold text-gray-400 uppercase">
                                        Nov
                                    </span>
                                    <span className="block text-xl font-bold text-primary">
                                        12
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Ladies Night</h4>
                                    <span className="text-xs text-gray-500">
                                        Free table time for women
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="w-12 text-center">
                                    <span className="block text-xs font-bold text-gray-400 uppercase">
                                        Nov
                                    </span>
                                    <span className="block text-xl font-bold text-primary">
                                        15
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">
                                        Trick Shot Exhibition
                                    </h4>
                                    <span className="text-xs text-gray-500">
                                        Feat. Pro John Doe
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* -- Membership Section - */}
            <section
                id="membership"
                className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full"
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Choose Your Membership</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Whether you're a weekend warrior or a daily grinder, we have a plan
                        that fits your game.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-8 hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Basic</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                For the Solo player
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">
                                &#x20B9;2999
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                / month
                            </span>
                        </div>
                        <button
                            onClick={() => navigate("/contact")}
                            className="
                            w-full inline-flex items-center justify-center
                            rounded-lg h-12
                            bg-gray-100 dark:bg-[#28392e]
                            text-gray-900 dark:text-white
                            font-bold text-sm
                            hover:bg-gray-200 dark:hover:bg-[#344a3b]
                            transition-colors
                        "
                        >
                            Walk In
                        </button>

                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Standard table
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                1 hour solo practice.
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Play in between 10 To 12 PM
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="relative flex flex-col gap-6 rounded-2xl border-2 border-primary bg-white dark:bg-[#152319] p-8 shadow-[0_0_20px_rgba(17,212,82,0.1)] hover:-translate-y-1 transition-all duration-300 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-[#102216] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Best Value
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-1">Advance Member</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                For the regular enthusiast
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">
                                &#x20B9;5999
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                / month
                            </span>
                        </div>
                        <Link to="/contact">
                            <button className="w-full rounded-lg h-12 bg-primary hover:text-white hover:bg-black text-[#102216] font-bold text-sm transition-colors shadow-lg shadow-primary/20">
                                Join Now
                            </button>
                        </Link>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                {/* <span className="font-bold text-gray-900 dark:text-white">
                                    50% off
                                </span>{" "} */}
                                Standard table
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Play 2 hour in happy hour 2.
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Valid from 11 AM to 4 PM
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-8 hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Ultimate Member</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                For the serious competitor
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">
                                &#x20B9;9999
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                / month
                            </span>
                        </div>
                        <Link to="/contact">
                            <button className="w-full rounded-lg h-12 bg-gray-100 dark:bg-[#28392e] text-gray-900 dark:text-white font-bold text-sm hover:bg-gray-200 dark:hover:bg-[#344a3b] transition-colors">
                                Apply for League
                            </button>
                        </Link>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                <span className="font-bold text-gray-900 dark:text-white">
                                    Unlimited
                                </span>{" "}
                                Play
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Solo Practic (10am to 12pm)
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Pre-booking Facility
                            </li>
                            {/* <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                VIP Room access
                            </li> */}
                        </ul>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] p-8 hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Coaching</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                For the Solo player
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">
                                &#x20B9;1999
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                / month
                            </span>
                        </div>
                        <button
                            onClick={() => navigate("/contact")}
                            className="
                            w-full inline-flex items-center justify-center
                            rounded-lg h-12
                            bg-gray-100 dark:bg-[#28392e]
                            text-gray-900 dark:text-white
                            font-bold text-sm
                            hover:bg-gray-200 dark:hover:bg-[#344a3b]
                            transition-colors
                        "
                        >
                            Walk In
                        </button>

                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Standard table
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                1 hour solo practice.
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    check
                                </span>
                                Play in between 10 To 12 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Rating review */}
            <section className="py-20 bg-[#f0f2f0] dark:bg-[#0d1b11] border-t border-gray-200 dark:border-[#28392e]">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-8 text-primary">
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="text-gray-500 text-sm ml-2 font-medium">
                            Rated 4.9/5 by our members
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold mb-12">Player Stories</h2>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Testimonial 1 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                "Absolutely loved the arena! The space was well-maintained, vibrant, and perfect for our game. Big shoutout to the owner, Shushant, for being so welcoming and helpful throughout. Will definitely be coming back!"
                            </p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbjGq5VCReygcqnEgiYbDz1kox-UDqCiENnUC-khpoVDCsqdpmIs4iETvgV_f-OhRDLdZbW65GBxLaqFW47CGeyXUH0M2G4Gu3zRm0sSmfjLF2bZiBesOGzbcPcNuj-__OD10LoZsoRy9SCnIwGfL8FqKaeJ2_8fGORYd1dG-eAgAk3XDVXgkls3o1AL9lOHy-MX16hS39Cpil4gvNNzFE2QkX5kGAXOUwz5OTjCW906ngLSQ3yFRIjuJW_hGgRx_9CjY1YZdUS6gd"
                                        alt="Male member portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Shanti Bhushan</div>
                                    {/* <div className="text-xs text-gray-500">Member since 2025</div> */}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                "Recently visited this snooker place & had a great experience. Well maintained tables (looks brand new), good lighting & a relaxed atmosphere so what else do you need to chill and play a game of snooker. Price was also reasonable considering the location hence worth checking out!"
                            </p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src={abhisek}
                                        alt="Female member portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">
                                        Abhishek Kumar Sinha
                                    </div>
                                    {/* <div className="text-xs text-gray-500">Casual Player</div> */}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                "Fantastic snooker club! The tables are well-maintained, the lighting is perfect, and the atmosphere is just right for both casual and serious players. The staff is friendly and always ready to help. Whether you're looking to practice, compete, or just have a fun game with friends, this place delivers. Highly recommend!"
                            </p>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src={sheikh}
                                        alt="Male member portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">SHEIKH ASAD</div>
                                    {/* <div className="text-xs text-gray-500">Casual Player</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
