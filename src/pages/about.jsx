import React, { useState } from "react";

const About = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* ================= HERO ================= */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-8">
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
            <section className="bg-[#0d1b11] border-y border-[#28392e] py-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        ["1998", "Founded"],
                        ["15", "Pro Tables"],
                        ["500+", "Active Members"],
                        ["25+", "Years Experience"]
                    ].map(([value, label]) => (
                        <div key={label}>
                            <div className="text-3xl font-black text-white">{value}</div>
                            <div className="text-sm text-gray-400">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* -- Origin Story Section -- */}
            <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-12">
                    The Origin Story
                </h2>

                <div className="grid grid-cols-[40px_1fr] gap-x-6">
                    {/* Timeline Item 1 */}
                    <div className="flex flex-col items-center gap-1 pt-3">
                        <div className="text-primary bg-[#152319] p-2 rounded-full border border-[#28392e] z-10">
                            <span className="material-symbols-outlined">flag</span>
                        </div>
                        <div className="w-[2px] bg-[#28392e] h-full grow -mt-1"></div>
                    </div>

                    <div className="flex flex-1 flex-col py-3 pb-10">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">
                            1998
                        </p>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2">
                            Founded in a Basement
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base">
                            We started with just two second-hand tables and a passion for the sport. The goal was simple: provide a place where the game came first.
                        </p>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[2px] bg-[#28392e] h-4 -mb-1"></div>
                        <div className="text-white bg-[#152319] p-2 rounded-full border border-[#28392e] z-10">
                            <span className="material-symbols-outlined">emoji_events</span>
                        </div>
                        <div className="w-[2px] bg-[#28392e] h-full grow -mt-1"></div>
                    </div>

                    <div className="flex flex-1 flex-col py-3 pb-10">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">
                            2005
                        </p>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2">
                            First City Championship
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base">
                            Hosting our first major tournament put us on the map. Players from across the state came to challenge the local legends.
                        </p>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-[2px] bg-[#28392e] h-4 -mb-1"></div>
                        <div className="text-white bg-[#152319] p-2 rounded-full border border-[#28392e] z-10">
                            <span className="material-symbols-outlined">storefront</span>
                        </div>
                        <div className="w-[2px] bg-[#28392e] h-full grow -mt-1"></div>
                    </div>

                    <div className="flex flex-1 flex-col py-3 pb-10">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">
                            2012
                        </p>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2">
                            The Grand Expansion
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base">
                            Moving to our current location allowed us to install 15 Riley Aristocrat tables and build a full-service lounge for our members.
                        </p>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="flex flex-col items-center gap-1 pb-3">
                        <div className="w-[2px] bg-[#28392e] h-4 -mb-1"></div>
                        <div className="text-primary bg-[#152319] p-2 rounded-full border border-[#28392e] z-10">
                            <span className="material-symbols-outlined">local_police</span>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col py-3">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">
                            2023
                        </p>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2">
                            National Recognition
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base">
                            Awarded "Best Snooker Hall" in the region. A testament to our commitment to maintaining professional standards.
                        </p>
                    </div>
                </div>
            </section>

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
                                <p className="text-sm text-gray-500 dark:text-gray-400">Play on professional Riley Aristocrat tables maintained daily with Strachan 6811 cloth.</p>
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
                                <p className="text-sm text-gray-500 dark:text-gray-400">Full-service bar and premium leather lounge for post-game relaxation and strategy talks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -- Team Section -- */}
            <section className="py-20 bg-[#f0f2f0] dark:bg-[#0d1b11] border-t border-gray-200 dark:border-[#28392e]">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFsLloEhkQPQppkhVjtInGzkLnHiOEOxoMXi3bIB-gjukueWWLTGql-wyD-WW5cu4ZjsyykfysdBNQR9wsCCGwJdxWVZMbjqG9WViaaw-z3cgOmQLENcDSOiXvq-neNQqloU04i5mWlZI0JCPnXufzi4CZaaFEDYbtcDCgw6ml2j4L7J51xVHo1tCaLDbJ6kYsAttGcfRvPZvVe9AXds7_K7KWv0xeKC9h-2AcrKwv9oSch-VpD1mHfVX0JpAps_ofWgutarNzN9E"
                                    alt="David Miller"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">David Miller</div>
                                <div className="text-xs text-gray-500">Head Coach</div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx78c1FR2ijOKkzcjvdjkt8_72nFZJellEUawHn0F2Pj7kfA3KlNSkawgA-QgWs96kt95uGUkFs70BCLq5jdGXOilnbQTVmmEfGdvLvh8D_I5wYHqZykUtsqzTfuAsWQa2czjrvCrbW1_9euaqtnKoyfW6zkN8VkNp7DQof4qKA8j9TBKX8kgxVO3IVJHYmrnxZXmR8g3QsDLvoowJ2eOa36SEpac1CQ1I76_snrr5XqMoiFLytsb_RPSpRC02WmnQqsiabTfZuae-"
                                    alt="Sarah Jenkins"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Sarah Jenkins</div>
                                <div className="text-xs text-gray-500">Senior Instructor</div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="p-6 rounded-xl bg-white dark:bg-[#152319] shadow-sm flex flex-col gap-4">
                            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWOOCntn2EUTd63mh9lV9XCpmv-bx5Vwgj56KjJlCE6oHnpESDhcjeAia5GKovUSBCcGczAFUxunqeglpAuhF8jEvW4CIO4t5Ok-sI17Hs3PPaoPfVv8zKVJYiQCzPUkQu1sn2jGM153DjL1ykiNN1mTCwohL5w9dicGRmiMrgDujaXheEiiHjnR6XubHe-wpwqDJowrOVxHvC3-30fKIo1F9DlNANu_qwx1Ymx5WqlzCJkgn2UZJksOCZQILwpyDYeE9b2VNxTEU"
                                    alt="Marcus Chen"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Marcus Chen</div>
                                <div className="text-xs text-gray-500">Tournament Director</div>
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
                        <button className="h-12 px-8 rounded-lg bg-yellow-400 hover:bg-[#0eb846] text-[#102216] text-base font-bold transition-all shadow-[0_0_20px_rgba(17,212,82,0.4)] hover:shadow-[0_0_30px_rgba(17,212,82,0.6)]">
                            Learn More
                        </button>
                        <button className="h-12 px-8 rounded-lg bg-[#0d1b11] hover:bg-white/20 hover:text-black text-white border border-white/20 backdrop-blur-md text-base font-bold transition-all">
                            View Membership
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
