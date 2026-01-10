import React, { useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
    const [plan, setPlan] = useState("monthly")
    return (
        <div className="flex flex-col mt-[-5px] min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden mt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(16, 34, 22, 0) 0%, rgba(16, 34, 22, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeaed9-LP2f16ekEU17q_bWArjxqdeBYVAY-mHtzV4A-qWNBkDl8Chw979I3oqzSGLVAVideOql7mvkUMC8gtq6S-ysD1185juSWWogFXSHq7bguiBhzSMmSC5LznQmUIM3aRYp_AUMiXMRoBcpK7y3KwnheFfl6PHoCPxq7oCXjl_0dAAA78ZOSy7tdmBL0RcxmYseX28d34UVAHKhry4h2dFgbOUKN19n8XYj12u2jsZDyLuNMUBngHCRY545Qo9ev0miXLAh9rq')",
                    }}
                ></div>

                <div className="relative z-10 max-w-2xl text-center px-4 flex flex-col items-center gap-4">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        PLAY LIKE A <span className="text-yellow-400">PRO</span>
                    </h1>
                    <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
                        Experience world-class tables and a premium atmosphere. Join the club for exclusive perks or book a guest session instantly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link to="/about">
                            <button
                                className="
                            relative overflow-hidden
                            h-12 px-8 rounded-lg
                            bg-yellow-400 text-[#102216] text-base font-bold
                            transition-all duration-300 ease-out hover:text-white hover:bg-black
                            "
                            >
                                <span className="relative z-10 transition-colors duration-300 hover:text-white">
                                    Learn More
                                </span>
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-base font-bold transition-all">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full px-4 md:px-10 py-12 bg-black">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col">
                    <div className="flex items-center justify-between pb-8">
                        <div>
                            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">MEMBERSHIP TIERS</h2>
                            <p className="text-white/60 text-sm mt-2">Unlock exclusive benefits and cheaper rates.</p>
                        </div>
                        <div className="hidden sm:flex gap-2 p-1 bg-[#152319] rounded-lg border border-[#28392e]">
                            <button
                                onClick={() => setPlan("monthly")}
                                className={`px-4 py-1.5 rounded text-sm font-bold transition
                                ${plan === "monthly"
                                        ? "bg-yellow-400 text-[#102216]"
                                        : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Monthly
                            </button>

                            <button
                                onClick={() => setPlan("yearly")}
                                className={`px-4 py-1.5 rounded text-sm font-bold transition
                                ${plan === "yearly"
                                        ? "bg-yellow-400 text-[#102216]"
                                        : "text-white/70 hover:text-white"
                                    }`}
                            >
                                Yearly (-20%)
                            </button>
                        </div>
                    </div>
                    {/* plans */}
                    {
                        plan === "monthly" ?
                            <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#0b130d] p-8 hover:border-yellow-400/50 transition-colors group">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-xl font-bold">Basic Membership</h3>
                                            <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">Basic</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-white text-4xl font-black tracking-tight">&#x20B9;3000</span>
                                            <span className="text-white/60 text-sm font-medium">/ access</span>
                                        </div>
                                        <p className="text-white/60 text-sm">Perfect for Solo players and occasional visits.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Standard table.
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            1 hour solo practice.
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Play in between 10 To 12 PM.
                                        </div>
                                    </div>
                                    <Link to="/contact">
                                        <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                            Book Membership
                                        </button>
                                    </Link>
                                </div>

                                {/* Card 2 (Highlight) */}
                                {/* <div className="flex flex-col gap-6 rounded-xl border-2 border-yellow-400 bg-[#152319]/50 relative p-8 shadow-[0_0_30px_rgba(241,203,12,0.1)]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-[#102216] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                                Most Popular
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">Club Member</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-white text-4xl font-black tracking-tight">&#x20B9;50</span>
                                    <span className="text-white/60 text-sm font-medium">/ month</span>
                                </div>
                                <p className="text-white/60 text-sm">For regulars who want priority and savings.</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex items-center gap-3 text-sm text-white">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    <span className="font-bold">20% off</span> table rates
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    7-day advance booking
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Locker rental available
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Guest passes (2/mo)
                                </div>
                            </div>
                            <Link to="/contact">
                                <button className="w-full py-3 rounded-lg bg-yellow-400 hover:text-white hover:bg-black text-[#102216] font-bold transition-all shadow-lg shadow-yellow-400/20">
                                    Join Club
                                </button>
                            </Link>
                        </div> */}

                                {/* Card 3 */}
                                <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#0b130d] p-8 hover:border-yellow-400/50 transition-colors">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-xl font-bold">Advance Membership</h3>
                                            <span className="bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">Best Value</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-white text-4xl font-black tracking-tight">&#x20B9;5999</span>
                                            <span className="text-white/60 text-sm font-medium">/ month</span>
                                        </div>
                                        <p className="text-white/60 text-sm">Advance access for serious players and professionals.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            <span className="font-bold">Standard table.</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Play 2 hour in happy hour 2.
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Valid from 11 AM to 4 PM.
                                        </div>
                                        {/* <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Pro shop discounts (15%)
                                </div> */}
                                    </div>
                                    <Link to="/contact">
                                        <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                            Book Membership
                                        </button>
                                    </Link>
                                </div>
                                {/* {Card 4} */}
                                <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#0b130d] p-8 hover:border-yellow-400/50 transition-colors">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-xl font-bold">Value Membership</h3>
                                            <span className="bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">Best Value</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-white text-4xl font-black tracking-tight">&#x20B9;4000</span>
                                            <span className="text-white/60 text-sm font-medium">/ month</span>
                                        </div>
                                        <p className="text-white/60 text-sm">Elite access for serious players and professionals.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            <span className="font-bold">Standard table.</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Pre-booking facility.
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Frame Charge Will be applied as 3 rps/ per min.
                                        </div>
                                        {/* <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Pro shop discounts (15%)
                                </div> */}
                                    </div>
                                    <Link to="/contact">
                                        <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                            Book Membership
                                        </button>
                                    </Link>
                                </div>
                                {/* {Card 4} */}
                                <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#0b130d] p-8 hover:border-yellow-400/50 transition-colors">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-xl font-bold">Ultimate Membership</h3>
                                            <span className="bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">Best Value</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-white text-4xl font-black tracking-tight">&#x20B9;9999</span>
                                            <span className="text-white/60 text-sm font-medium">/ month</span>
                                        </div>
                                        <p className="text-white/60 text-sm">Advance access for serious players and professionals.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            <span className="font-bold"> Standard table.</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Unlimited play.
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Solo Practic (10am to 12pm).
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Pre-booking Facility.
                                        </div>
                                    </div>
                                    <Link to="/contact">
                                        <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                            Book Membership
                                        </button>
                                    </Link>
                                </div>
                                {/* Card 5 */}
                                <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#0b130d] p-8 hover:border-yellow-400/50 transition-colors">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-xl font-bold">Coaching Membership</h3>
                                            <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">Coaching</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-white text-4xl font-black tracking-tight">&#x20B9;1999</span>
                                            <span className="text-white/60 text-sm font-medium">/ month</span>
                                        </div>
                                        <p className="text-white/60 text-sm">Professional coaching for players</p>
                                    </div>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            <span className="font-bold"> Standard table.</span>
                                        </div>
                                        {/* <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            Frame Charges will be Applied as 2.5 rs / min.
                                        </div> */}
                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-yellow-400">check</span>
                                            From 11 am to 4 pm.
                                        </div>
                                    </div>
                                    <Link to="/contact">
                                        <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                            Book Membership
                                        </button>
                                    </Link>
                                </div>
                            </div> :
                            <div className="w-full min-h-[300px] flex items-center justify-center px-4">
                                <div className="coming-soon-card">
                                    <h1 className="coming-soon-title">Coming Soon</h1>
                                    <p className="coming-soon-subtitle">
                                        We are working on something special for you.
                                    </p>
                                </div>
                            </div>

                        }

                </div>
            </section>
        </div>
    );
};

export default Book;