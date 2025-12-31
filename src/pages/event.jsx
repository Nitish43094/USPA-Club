import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Calendar from '../components/Calendar'
const Event = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    // Countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 4,
        minutes: 30
    });

    // Simulate countdown (you can replace with actual countdown logic)
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
                }
                return prev;
            });
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    const filters = [
        { id: "all", label: "All Events" },
        { id: "tournaments", label: "Tournaments" },
        { id: "leagues", label: "Leagues" },
        { id: "social", label: "Social Specials" }
    ];

    const tournaments = [
        {
            id: 1,
            date: { month: "Dec", day: "15" },
            title: "Pro-Am Open Championship",
            subtitle: "Single Elimination • Best of 7 Frames",
            prize: "5,000 Prize",
            entry: "50 Entry",
            time: "10:00 AM",
            status: "Open",
            statusColor: "green"
        },
        {
            id: 2,
            date: { month: "Dec", day: "20" },
            title: "Amateur Sunday Swiss",
            subtitle: "Swiss Format • 5 Rounds Guaranteed",
            prize: "Trophy + Gear",
            entry: "25 Entry",
            time: "12:00 PM",
            status: "Filling Fast",
            statusColor: "yellow"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden mt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6pK7v8-57-RQKO25HifGFBVt6WpJ8BrKDZNORJldhBjrjNEZroC6MlI_Df728Twzz6WlbA1gSlpiCQxCjxTk4NqWN2rAJQGvRP__2sBkUnImtjbgQZlnSEpl05-AuJDJjErZ0m_-Y0VzxI-WkFwj6-eCq-SxQTBNfSpCsKkbAQ1dII0qfM6EF-YKJXvGNCW95hzCNyDc9o5Vkl-36nL8ZMYbY2c6m-qFK5Umu7QNgLHx_HDd0WXOy047y0UzPpdOUQ1Pl5C0QaYBZ')",
                    }}
                ></div>

                <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 md:px-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 py-12">
                    <div className="flex flex-col gap-4 text-left max-w-2xl">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-yellow-400 text-[#102216] text-xs font-bold uppercase tracking-wider">
                                Featured Event
                            </span>
                        </div>
                        <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                            Winter Cup 2024
                        </h1>
                        <h2 className="text-gray-200 text-lg font-normal leading-relaxed max-w-xl drop-shadow-md">
                            The biggest cue sports event of the year is here. Compete with the best for a grand prize pool of &#x20B9;5,000. Registration closes soon.
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button
                                onClick={() => toast.success("Comming Soon...")}
                                className="h-12 px-6 bg-yellow-400 text-[#102216] text-base font-bold rounded-lg duration-300 ease-out hover:text-white hover:bg-black">
                                Table Book
                            </button>
                            <button onClick={() => toast.success("Comming Soon...")}
                                className="h-12 px-6 bg-[#28392e]/80 hover:bg-[#28392e] backdrop-blur-sm border border-white/10 text-white text-base font-bold rounded-lg transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Timer Component */}
                    <div className="bg-[#28392e]/40 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-center gap-4 min-w-[300px]">
                        <h3 className="text-white text-sm font-bold uppercase tracking-widest text-center">
                            Registration Ends In
                        </h3>
                        <div className="flex gap-3">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0d1b11] border border-[#28392e]">
                                    <p className="text-yellow-400 text-2xl font-black">{timeLeft.days}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">Days</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0d1b11] border border-[#28392e]">
                                    <p className="text-white text-2xl font-black">{String(timeLeft.hours).padStart(2, '0')}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">Hrs</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0d1b11] border border-[#28392e]">
                                    <p className="text-white text-2xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">Mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Events List */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Filters */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#28392e]">
                            <div className="flex gap-2 flex-wrap">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => setSelectedFilter(filter.id)}
                                        className={`h-9 px-4 rounded-lg transition-colors ${selectedFilter === filter.id
                                            ? "bg-yellow-400 text-[#102216] font-bold"
                                            : "bg-[#28392e] hover:bg-[#344a3c] text-white font-medium"
                                            }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                                    search
                                </span>
                                <input
                                    className="bg-[#0d1b11] border border-[#28392e] text-white text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full pl-10 p-2 placeholder-gray-500"
                                    placeholder="Search events..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Section: Tournaments */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-tight">
                                    Major Tournaments
                                </h3>
                                <a className="text-yellow-400 hover:text-[#0eb846] text-sm font-bold hover:underline transition-colors" href="#">
                                    View All
                                </a>
                            </div>

                            {/* Tournament Cards */}
                            {tournaments.map((tournament) => (
                                <div
                                    key={tournament.id}
                                    className="flex flex-col sm:flex-row gap-5 bg-[#152319] p-5 rounded-xl border border-[#28392e] hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/10 group"
                                >
                                    <div className="flex flex-row sm:flex-col items-center justify-center bg-[#0d1b11] rounded-lg w-full sm:w-20 h-16 sm:h-20 shrink-0 border border-[#28392e]">
                                        <span className="font-bold text-yellow-400 text-sm uppercase tracking-wider">
                                            {tournament.date.month}
                                        </span>
                                        <span className="text-2xl font-black text-white ml-2 sm:ml-0">
                                            {tournament.date.day}
                                        </span>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                    {tournament.title}
                                                </h4>
                                                <p className="text-sm text-gray-400 mt-1">{tournament.subtitle}</p>
                                            </div>
                                            <span
                                                className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${tournament.statusColor === "green"
                                                    ? "bg-green-900/30 text-green-400 border border-green-800"
                                                    : "bg-yellow-900/30 text-yellow-400 border border-yellow-800"
                                                    }`}
                                            >
                                                {tournament.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm">
                                            <span className="text-gray-300 font-medium flex items-center gap-1.5 bg-[#0d1b11] px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-yellow-400 text-[18px]">
                                                    emoji_events
                                                </span>{" "}
                                                {tournament.id == 1 ? (<span className="text-[17px]">&#x20B9;</span>) : ""}{tournament.prize}
                                            </span>
                                            <span className="text-gray-300 font-medium flex items-center gap-1.5 bg-[#0d1b11] px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                                                    payments
                                                </span>{" "}
                                                <span className="text-[17px]">&#x20B9;</span>{tournament.entry}
                                            </span>
                                            <span className="text-gray-300 font-medium flex items-center gap-1.5 bg-[#0d1b11] px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-gray-400 text-[18px]">
                                                    schedule
                                                </span>{" "}
                                                {tournament.time}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center sm:self-center pt-2 sm:pt-0">
                                        <button onClick={() => toast.success("Comming Soon...")}
                                            className="w-full sm:w-auto bg-yellow-400 transition-all duration-300 ease-out hover:text-white hover:bg-black text-[#102216] font-bold py-2.5 px-6 rounded-lg text-sm shadow-lg shadow-yellow-400/20">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Section: Leagues */}
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-tight">
                                    Ongoing Leagues
                                </h3>
                            </div>

                            {/* League Card */}
                            <div className="flex flex-col sm:flex-row items-stretch gap-0 rounded-xl overflow-hidden border border-[#28392e] hover:border-yellow-400/50 transition-colors">
                                <div
                                    className="w-full sm:w-48 bg-cover bg-center min-h-[140px]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBniC9RyfauBn1ofO2m3nI40zrbMCvNKjeNCUjCrkK7mzhqFgJYj_xGd32U42xSyt0R_KWXo_pJ6wiq_vmOtYSoTXlQEpXUtsyEgOLv5_yBJqH0w53A7eAToeOBDUqmy9p9IKS20gYS2eWma6I5KxmY94KWPdiL-jwsg-8VpwOd18evolXPu-msSGY5coZGBKjw3xjIlqWAK7w9H3VKQxT2lOCZ78RwCUZTKUU9UcQrQSXIw3rBlF5SxsjvHOIHQJGHAvwGmpqUz4Mm')",
                                    }}
                                ></div>
                                <div className="flex-1 bg-[#152319] p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between">
                                            <h4 className="text-lg font-bold text-white">Tuesday Night Snooker League</h4>
                                            <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">repeat</span> Weekly
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                                            Join our most popular handicap league. Perfect for all skill levels. Cash prizes for top 4 finishers at the end of the season.
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex -space-x-2">
                                            <img
                                                alt="Player avatar"
                                                className="w-8 h-8 rounded-full border-2 border-[#152319]"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0tiH0yv-2A5vsD0aUhF16G0Uy-Pb3V-00eUuP8bwYy4YGnUHD1ecplt2JHxFW40LDs0XEMw35XGRRZUwS6IQ2N-1wV8Pr4Kv8DMRPg-iHF_qI8jO0iFwWGbgH4KHk_qoP_RH19XcJiZWMqRBjFSf4Sl7bZHCsmNePWBekE3xXIj1af8HVLj6P_w33OW4F2UBCjQbQEwyWJyz8hwhC2hRtH4xFPHhC6KrNDhfgz1aFAweR3USIiTg6ikjwFiIQM5n31UFcVOp_IGSo"
                                            />
                                            <img
                                                alt="Player avatar"
                                                className="w-8 h-8 rounded-full border-2 border-[#152319]"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzbMEK2_v-Us0nUAzaZ6n7s4bWOce63w1Q-AX46nKSgjCZkX1R8q2z0a4DQyUrmym09Yti0c_6UVkkscct3n8Hh1dW-pJ5rN4C-GimSFOb44pwuKBhS97a3SMYs8G6ywsJUJKrZ4Se_Hntxl9jStYto1ZP_yiAxJePaWKM_3towGvBQObUnj1SgWiuZvTvnJ4FIQI5KdoQGr83GRQjOgdbbRijA3z1zkxAkeSLNr67MVAJz9pSJ-t_dqhIzZlA_r6VXwSHWbCsGi9"
                                            />
                                            <img
                                                alt="Player avatar"
                                                className="w-8 h-8 rounded-full border-2 border-[#152319]"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMTfHmcvhOa7w9IoihT5B6U9pz6rVPVhmPa2iL-jyzs8BIlDZPeCFEi8WVjEJEdDFiYcgokbhdXnP6SEljW0oOmcJtgq7zWqODXtzghIbRBG8PRyBexk9e-uHwqycSdgQH2RV3ipE0MuMLhMfdNsVi3NqbbHd_43Hqgw1oI2p6bDgCQR_4rF3k_OnduJ6aa93veZeuoJfMZN4ZU8eOGLFHJWX8pgSA2O3oXP1SdZ4XZEb6peMHZrsuvGTWtzkW6J5kObIGX-mC00F4"
                                            />
                                            <div className="w-8 h-8 rounded-full border-2 border-[#152319] bg-[#28392e] text-white text-[10px] font-bold flex items-center justify-center">
                                                +24
                                            </div>
                                        </div>
                                        <button onClick={() => toast.success("Comming Soon...")}
                                            className="text-yellow-400 hover:text-[#0eb846] text-sm font-bold transition-colors flex items-center gap-1">
                                            View Leaderboard{" "}
                                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        {/* Calendar Widget */}
                        <Calendar />
                        {/* Special Event Promo */}
                        <div className="relative rounded-xl overflow-hidden min-h-[200px] flex flex-col justify-end p-5 group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQgxgUF2p17kp3xJboe4lfZeg_Pv_j7KSeyQ_LtSBeuHzjaIxWDFZiZM7oDr8C1MgOxDkw6TTohmlOnCU-WAA0zPndZj232rOLg1b2-9WyJqFCf-LcIYrTN4aFo8hJfOtpZaGpdCj7Oq0EXSnL6NuKpIOiLBh0iTaSYlwq4scHhURGcxYK_GvIw8eLc_ZM1s2scByZfSdQhghCljM8usuXT96RTGxt_IvzFM-uMdPADxuGwosz2jl1Ywke5Z09-2QbYYwrVgQEL_Pd')",
                                }}
                            ></div>
                            <div className="relative z-10">
                                <span className="inline-block px-2 py-1 bg-purple-600 text-white text-[10px] font-bold rounded mb-2 uppercase tracking-wide">
                                    Special Event
                                </span>
                                <h4 className="text-white text-lg font-bold leading-tight">Trick Shot Masterclass</h4>
                                <p className="text-gray-300 text-xs mt-1 mb-3">
                                    Learn from the world champion in this exclusive 3-hour session.
                                </p>
                                <button onClick={() => toast.success("Comming Soon...")}
                                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-bold py-2 rounded transition-colors">
                                    Book Your Spot
                                </button>
                            </div>
                        </div>

                        {/* Contact / Help */}
                        <div className="bg-[#152319] p-5 rounded-xl border border-[#28392e]">
                            <h4 className="text-white text-sm font-bold mb-2">Need help registering?</h4>
                            <p className="text-gray-400 text-xs mb-3">
                                Contact our tournament director for assistance with entries or league placement.
                            </p>
                            <a
                                className="text-yellow-400 hover:text-[#0eb846] text-xs font-bold flex items-center gap-1 hover:underline transition-colors"
                                href="mailto:ultimatesnookerarena@gmail.com"
                            >
                                <span className="material-symbols-outlined text-[14px]">mail</span> ultimatesnookerarena@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Event;