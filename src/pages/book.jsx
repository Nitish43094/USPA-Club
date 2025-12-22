import React, { useState } from "react";

const Book = () => {
    const [selectedDate, setSelectedDate] = useState("2023-10-24");
    const [duration, setDuration] = useState("2");
    const [selectedTime, setSelectedTime] = useState("17:00");
    const [selectedTable, setSelectedTable] = useState(3);

    const timeSlots = [
        { time: "16:00", available: false },
        { time: "17:00", available: true },
        { time: "18:00", available: true },
        { time: "19:00", available: false },
        { time: "20:00", available: true },
        { time: "21:00", available: true },
        { time: "22:00", available: true },
        { time: "23:00", available: true },
    ];

    const tables = [
        { id: 1, name: "Table 1", available: false, type: "standard" },
        { id: 2, name: "Table 2", available: true, type: "standard" },
        { id: 3, name: "Table 3", available: true, type: "standard" },
        { id: 4, name: "Table 4", available: true, type: "standard" },
        { id: 5, name: "The Arena (Match Table)", available: true, type: "vip" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
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
                        <button className="h-12 px-8 rounded-lg bg-yellow-400 hover:bg-[#0eb846] text-[#102216] text-base font-bold transition-all shadow-[0_0_20px_rgba(17,212,82,0.4)] hover:shadow-[0_0_30px_rgba(17,212,82,0.6)]">
                            Learn More
                        </button>
                        <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-base font-bold transition-all">
                            View Memberships
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full px-4 md:px-10 py-12 bg-[#0d1b11]">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col">
                    <div className="flex items-center justify-between pb-8">
                        <div>
                            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">MEMBERSHIP TIERS</h2>
                            <p className="text-white/60 text-sm mt-2">Unlock exclusive benefits and cheaper rates.</p>
                        </div>
                        <div className="hidden sm:flex gap-2 p-1 bg-[#152319] rounded-lg border border-[#28392e]">
                            <button className="px-4 py-1.5 rounded bg-yellow-400 text-[#102216] text-sm font-bold">Monthly</button>
                            <button className="px-4 py-1.5 rounded text-white/70 hover:text-white text-sm font-medium">Yearly (-20%)</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#152319] p-8 hover:border-yellow-400/50 transition-colors group">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">Walk-in Guest</h3>
                                    <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">Basic</span>
                                </div>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-white text-4xl font-black tracking-tight">Free</span>
                                    <span className="text-white/60 text-sm font-medium">/ access</span>
                                </div>
                                <p className="text-white/60 text-sm">Perfect for casual players and occasional visits.</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Standard table rates
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    No booking priority
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Pay as you play
                                </div>
                            </div>
                            <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                Register Guest
                            </button>
                        </div>

                        {/* Card 2 (Highlight) */}
                        <div className="flex flex-col gap-6 rounded-xl border-2 border-yellow-400 bg-[#152319]/50 relative p-8 shadow-[0_0_30px_rgba(241,203,12,0.1)]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-[#102216] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                                Most Popular
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">Club Member</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-white text-4xl font-black tracking-tight">$50</span>
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
                            <button className="w-full py-3 rounded-lg bg-yellow-400 hover:bg-[#0eb846] text-[#102216] font-bold transition-all shadow-lg shadow-yellow-400/20">
                                Join Club
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col gap-6 rounded-xl border border-[#28392e] bg-[#152319] p-8 hover:border-yellow-400/50 transition-colors">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">VIP Pro</h3>
                                    <span className="bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">Best Value</span>
                                </div>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-white text-4xl font-black tracking-tight">$120</span>
                                    <span className="text-white/60 text-sm font-medium">/ month</span>
                                </div>
                                <p className="text-white/60 text-sm">Elite access for serious players and professionals.</p>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    <span className="font-bold">Free off-peak play</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Match table exclusive access
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Free personal locker
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <span className="material-symbols-outlined text-yellow-400">check</span>
                                    Pro shop discounts (15%)
                                </div>
                            </div>
                            <button className="w-full py-3 rounded-lg border border-[#28392e] bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                                Become VIP
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="w-full px-4 md:px-10 py-12 bg-[#152319]/30 border-t border-[#28392e]/50">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col">
                    <h2 className="text-white text-3xl font-bold leading-tight tracking-tight mb-8">BOOK A TABLE</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Controls */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {/* Date & Time */}
                            <div className="bg-[#152319] p-6 rounded-xl border border-[#28392e] flex flex-col gap-4">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-yellow-400">calendar_month</span>
                                    Select Date & Time
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-medium text-white/60 uppercase">Date</label>
                                    <input
                                        className="bg-[#0d1b11] border-[#28392e] rounded-lg text-white focus:ring-yellow-400 focus:border-yellow-400 w-full p-2.5"
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-medium text-white/60 uppercase">Duration</label>
                                    <select
                                        className="bg-[#0d1b11] border-[#28392e] rounded-lg text-white focus:ring-yellow-400 focus:border-yellow-400 w-full p-2.5"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    >
                                        <option value="1">1 Hour</option>
                                        <option value="2">2 Hours</option>
                                        <option value="3">3 Hours</option>
                                        <option value="4">4 Hours</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-medium text-white/60 uppercase">Start Time</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot.time}
                                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                                disabled={!slot.available}
                                                className={`p-2 text-sm rounded border transition-colors ${selectedTime === slot.time
                                                    ? "bg-yellow-400 text-[#102216] font-bold border-yellow-400"
                                                    : slot.available
                                                        ? "bg-[#0d1b11] border-[#28392e] text-white hover:border-yellow-400"
                                                        : "bg-[#0d1b11] border-[#28392e] text-white/30 cursor-not-allowed line-through"
                                                    }`}
                                            >
                                                {slot.time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Cost Summary */}
                            <div className="bg-[#152319] p-6 rounded-xl border border-[#28392e] flex flex-col gap-4">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-yellow-400">receipt_long</span>
                                    Booking Summary
                                </h3>
                                <div className="space-y-3 border-b border-white/10 pb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">Standard Table ({duration}hrs)</span>
                                        <span className="text-white font-medium">${12 * parseInt(duration)}.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">Service Fee</span>
                                        <span className="text-white font-medium">$2.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-yellow-400">
                                        <span>Member Discount</span>
                                        <span className="font-medium">- $0.00</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-white/50">Total to pay</span>
                                        <span className="text-2xl font-black text-white">${12 * parseInt(duration) + 2}.00</span>
                                    </div>
                                    <button className="bg-yellow-400 hover:bg-[#0eb846] text-[#102216] font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-yellow-400/20">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Map */}
                        <div className="lg:col-span-8 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-yellow-400">map</span>
                                    Select Table
                                </h3>
                                <div className="flex gap-4 text-xs font-medium text-white/70">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div> Selected
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#0d1b11] border border-yellow-400/50"></div> Available
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-white/10"></div> Occupied
                                    </div>
                                </div>
                            </div>

                            {/* Map Visualization */}
                            <div className="relative w-full h-[500px] bg-[#1a1a1a] rounded-xl border border-[#28392e] p-8 overflow-hidden shadow-inner">
                                {/* Floor Texture/Grid */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: "radial-gradient(#3b5443 1px, transparent 1px)",
                                        backgroundSize: "20px 20px",
                                    }}
                                ></div>

                                {/* Entrance Label */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white/20 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1">
                                    Entrance
                                </div>

                                {/* Tables Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 h-full relative z-10">
                                    {/* Table 1 (Standard - Occupied) */}
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#2a2a2a] border-4 border-[#3a3a3a] relative shadow-lg opacity-50 cursor-not-allowed">
                                            <div className="absolute inset-2 bg-[#2d3830] rounded-sm"></div>
                                            {/* Pockets */}
                                            <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                        </div>
                                        <span className="absolute text-xs font-bold text-white/30">Table 1</span>
                                    </div>

                                    {/* Table 2 (Standard - Available) */}
                                    <div
                                        className="relative flex items-center justify-center group/table cursor-pointer"
                                        onClick={() => setSelectedTable(2)}
                                    >
                                        <div className="w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 border-[#5d4037] relative shadow-xl group-hover/table:scale-105 transition-transform">
                                            <div className="absolute inset-2 bg-yellow-400/20 group-hover/table:bg-yellow-400/40 transition-colors rounded-sm flex items-center justify-center">
                                                <span className="text-yellow-400 font-bold text-xs opacity-0 group-hover/table:opacity-100">SELECT</span>
                                            </div>
                                            {/* Pockets */}
                                            <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                        </div>
                                        <span className="absolute -bottom-6 text-xs font-bold text-white/70">Table 2</span>
                                    </div>

                                    {/* Table 3 (Selected) */}
                                    <div className="relative flex items-center justify-center cursor-pointer" onClick={() => setSelectedTable(3)}>
                                        {/* Highlight Ring */}
                                        <div className="absolute w-36 h-56 bg-yellow-400/20 rounded-xl blur-md animate-pulse"></div>
                                        <div className="w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 border-yellow-400 relative shadow-2xl">
                                            <div className="absolute inset-2 bg-yellow-400 rounded-sm flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[#102216] text-3xl font-bold">check</span>
                                            </div>
                                            {/* Pockets */}
                                            <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                        </div>
                                        <span className="absolute -bottom-6 text-xs font-bold text-yellow-400">Table 3</span>
                                    </div>

                                    {/* Table 4 (Standard) */}
                                    <div
                                        className="relative flex items-center justify-center group/table cursor-pointer"
                                        onClick={() => setSelectedTable(4)}
                                    >
                                        <div className="w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 border-[#5d4037] relative shadow-xl group-hover/table:scale-105 transition-transform">
                                            <div className="absolute inset-2 bg-[#2d3830] group-hover/table:bg-yellow-400/40 transition-colors rounded-sm"></div>
                                            {/* Pockets */}
                                            <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                        </div>
                                        <span className="absolute -bottom-6 text-xs font-bold text-white/70">Table 4</span>
                                    </div>

                                    {/* Match Table (VIP) */}
                                    <div
                                        className="relative col-span-2 flex items-center justify-center group/table cursor-pointer"
                                        onClick={() => setSelectedTable(5)}
                                    >
                                        <div className="absolute top-0 right-10 bg-gradient-to-r from-yellow-500 to-amber-600 text-[10px] font-black px-2 py-0.5 rounded text-[#102216] uppercase">
                                            VIP Match Table
                                        </div>
                                        <div className="w-56 h-36 md:w-72 md:h-44 rounded-md bg-[#4a3525] border-4 border-[#8d6e63] relative shadow-2xl group-hover/table:scale-[1.02] transition-transform rotate-0">
                                            <div className="absolute inset-2 bg-[#1a472a] group-hover/table:bg-[#1f5c35] transition-colors rounded-sm flex items-center justify-center">
                                                <div className="w-1/2 h-px bg-white/10"></div>
                                                <div className="h-1/2 w-px bg-white/10 absolute"></div>
                                            </div>
                                            {/* Pockets */}
                                            <div className="absolute top-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                            <div className="absolute top-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                            <div className="absolute bottom-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                        </div>
                                        <span className="absolute -bottom-6 text-xs font-bold text-yellow-500">The Arena (Match Table)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-white/40 text-center italic">
                                *Table layouts are indicative. Specific table numbers subject to availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Book;