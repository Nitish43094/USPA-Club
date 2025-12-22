import React from "react";

const ClubFaci = () => {
    const features = [
        {
            id: 1,
            icon: "table_restaurant",
            label: "The Tables",
            title: "Professional Star Tournament Tables",
            description:
                "We spare no expense in providing the best playing conditions. Our club features 12 professional Star steel-block tables, the same standard used in World Snooker Tour events.",
            items: [
                "Heated slate for consistent speed",
                "Strachan 6811 Gold Tournament cloth",
                "Northern Rubber cushions",
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkTNjn8mVLzSDJZSOa56p4nc_FT_LU4nnU84nCiJ0omDfLJx_QU54iTu9zYwpIf66bTO7VpQCWa7hO6JtK10hDqnUsngvEP5sogKBwPYjE7Hcax46F_Xv5FWitz36KAmoIgCaBjLOqUpm_GZRV2-NJ5ptQR3Oe6_TCzOIO92KWq3QEMSXnZ0_NiPWrwak0U6fOn-2et-akhXMvCirLOuTomG83uIH7X2n5huQjXVy5D_anYm-UhOODcC_Sehm8sj0L8g_JgDF4paPv",
            imageAlt: "Close up of a professional snooker table pocket and green cloth",
            reverse: false,
        },
        {
            id: 2,
            icon: "sports_score",
            label: "The Equipment",
            title: "Precision Engineered Accessories",
            description:
                "A great table needs great equipment. Every table is supplied with a match-ready set of balls and meticulously maintained house cues.",
            items: [
                "Aramith Tournament Champion Balls",
                "Professional Electronic Scoreboards",
                "Selection of Ash and Maple House Cues",
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXEi4QfTrYHtDUTDnUCjPcQ-Qi4F4UI_KEh0KPTT3q9Vm9YxCirmdLvDrSc-_AuqHGiSBcaKI8XinhqulocNAR8a8nxvegBjLbyK25-hrtfMv3FiFvOAjo1VWHnmPKtCJ7GKvsJXM2_BvaD0KbkPHsGa_4Rjb0Ok7Ei6LxSXRE5goTvSYbiIdvW8gwBb1NJt5IQbldvi4kQtxIyQIwMBYZX-2g0KzgppHEYcFOZQ6kZq0lHCRuasQTEFljw3anHKTyAjpxsPboYR0E",
            imageAlt: "Rack of wooden snooker cues and set of balls",
            reverse: true,
        },
        {
            id: 3,
            icon: "weekend",
            label: "The Atmosphere",
            title: "Premium Club Experience",
            description:
                "Beyond the game, we offer a sanctuary for enthusiasts. Our climate-controlled environment ensures both player comfort and optimal table conditions year-round.",
            stats: [
                { value: "22°C", label: "Temperature" },
                { value: "45%", label: "Humidity" },
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASTWZy-dms1fHWt6FfxSpol_q1Kpre50J2H33OuTA4JQeWkHYfFy0LgaNqm9jxDT-dhgfHMs8WJSe8z3GLBGoMkBlMmRYwzqPAbdKuRKi_6aCnDguXw44E1Y57tvPXs5hgp1_VkahfwRDilbObQY1bv-aQV3N69DmiwnAkRCzGljTGdD-tj3p6EZQyz6YLYgJCbsLIcuZz2lhOT9X1IKxOR0mN26z3fpqkl1A8eeIt-TGQnT59bzfk-u2WRqHWPfwJKt97JHQnSCmg",
            imageAlt: "Dark moody interior of a snooker club lounge area",
            reverse: false,
        },
    ];

    const amenities = [
        {
            icon: "sports_bar",
            title: "Full Service Bar",
            description: "Enjoy a selection of craft beers, cocktails, and snacks while you play.",
        },
        {
            icon: "meeting_room",
            title: "VIP Rooms",
            description: "Book exclusive private rooms for undisturbed matches or private parties.",
        },
        {
            icon: "store",
            title: "Pro Shop",
            description: "Purchase cues, chalk, tips, and accessories from top brands on site.",
        },
        {
            icon: "lock",
            title: "Secure Lockers",
            description: "Dedicated secure storage for your personal cues and equipment.",
        },
    ];

    const galleryImages = [
        {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRKjr6MqbfNpflhOAeppc8ybzZ5cL_FeoT7hjVKdRyFGOiTcYOY_oEpGCzqQnzEj5v7vuKEWTTRF8mmoW4iAoyqfQDy16BXdN98cEiejtD-eeL31f1u-OCKtDnDNwrzgvpnzmjV94QzuoLL93JRlisH3rWaDp5YCfAt8bBhCeovFPR-tT9FVBKSOe93QDwFB0kvdzF8Muycf_9bN-cUKIsCziJQqWqr8nz_sfGzpCaZkWigHdfKCJjntzIrjajFca-wr-vGZGki_Yp",
            label: "Tournament Arena",
            span: "col-span-2 row-span-2",
        },
        {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4QohlgJlC9PozEL1eYacz44cGm03jky4f-sXnjFHJQMC77cPD7OLJ9xjIyhTaigc-K4qe3doLo6wLZWk-clvaD3YX4Tcohsz1c_mWnojd6JhijffW9dPSjsXPNtH9ZO4_I0pFEo5a5QiYMQaLtNUv_5jDW0jyc6XDXwyv1YtBDBbBZ2-WMYPyr0PSw-FZ8ILNatHI_2ZoHGlcdaO8CtoEAReBCHHEAK9d92SmsIEAw2pQSCkPlGCDZFRd0gqUbXE-7Vo3pmNeyo7",
            label: "Accessories",
            span: "col-span-1 row-span-1",
        },
        {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_89S9Wxc5deaLtogdVYShymaf99iffVkWEnkI053WZJ3ibnwSZIbpwREN_0-SHISMmeHmA4467Cm21w4mn9USK1BAb8WNmktCdBSTAl35EsAqwaKJpBM9Pm0rjU_Nw0bs7INoWQNNa-botcvS-ORBUWt_VmnF4s-aRN74o3pSmDAFTkBH2rr5E6VeNsHYoa_jA3Puq9ddtwMqj7VClX4czCLZLl0d0D--qaRT4chjud4eZmLAS-G4yBt7E2LFHD3_ebyhCI1ClTqd",
            label: "Precision",
            span: "col-span-1 row-span-1",
        },
        {
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkU7yh8rNrPKf_FSeDxgUVdD-JRDgq8O-ZQLVj2d-vVhDwq-LYFxbK_cs7EmGd0BDl8nCjO4hlHdEMh-V8kU7ym_FhO4HyBTGVCwE8W9B0e5fLiXBkxWN37FtpvmpfwUbA659okgmPG_L-ePquumO0hKvfafBLPxQL7OQgohe26-hnX2vcRvEEcobcSkOqYjyLo_g99cuMISprx2Jf80rGtD1Xe2I-jexOkwDDChQpnAiK1S1SswahFeXJy_uq8D4quZvSA_Cmdyvw",
            label: "The Main Hall",
            span: "col-span-2 row-span-1",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] mt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(16, 34, 22, 0.7) 0%, rgba(16, 34, 22, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsUYyHZneYTo-TtMPXWZEiCw7xPgWCWGDqo3ynjOJTrrpiacV4WeWAqQXQ7-UBjaAt-U9dx_t1ut0rj1xY2sGE1AlRyqoyUjoGEptyvO7g48WRLf8wHb5rvI5_os7Yrh8_8DgJtbeRrXi9pv9ASUGuNh644_xznZjhfWqR8ZoRcKhf7cUdIAbdpfR2OXNjoYshOOvDNUqd_y8zFAoPajnFR29DSswrpB9O8Vc3Q7H-fH7ydkf4RFmSB_sI0lpLVeq4hTyt91G_PPVK')",
                    }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="flex flex-col gap-6 text-center max-w-[800px]">
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                            World-Class Standards
                        </h1>
                        <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
                            Experience the game on professional Star tables with heated slate and premium cloth. Designed for the serious player.
                        </h2>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="h-12 px-8 rounded-lg bg-yellow-400 hover:bg-[#0eb846] text-[#102216] text-base font-bold transition-all shadow-[0_0_20px_rgba(17,212,82,0.4)] hover:shadow-[0_0_30px_rgba(17,212,82,0.6)]">
                                Book a Table
                            </button>
                            <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 text-base font-bold transition-colors">
                                View Equipment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Container */}
            <section className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-16">
                <div className="flex flex-col max-w-[1080px] w-full gap-24">
                    {/* Features */}
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${feature.reverse ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text Content */}
                            <div className={`flex flex-col gap-6 ${feature.reverse ? "md:order-2" : ""}`}>
                                <div className="flex items-center gap-2 text-yellow-400 font-bold tracking-wider uppercase text-sm">
                                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                                    <span>{feature.label}</span>
                                </div>
                                <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>

                                {/* Items or Stats */}
                                {feature.items && (
                                    <ul className="flex flex-col gap-3 mt-2">
                                        {feature.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-black">
                                                <span className="material-symbols-outlined text-yellow-400">
                                                    check_circle
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {feature.stats && (
                                    <div className="flex gap-4 mt-4">
                                        {feature.stats.map((stat, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col gap-1 p-4 bg-[#152319] rounded-lg border border-[#28392e] flex-1"
                                            >
                                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                                <span className="text-xs text-gray-400 uppercase tracking-wide">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Image */}
                            <div className={`relative group ${feature.reverse ? "md:order-1" : ""}`}>
                                <div className="absolute -inset-2 bg-yellow-400/20 rounded-xl blur-lg group-hover:bg-yellow-400/30 transition-all duration-500"></div>
                                <div
                                    className="relative w-full aspect-[4/3] rounded-xl bg-cover bg-center overflow-hidden border border-[#28392e]"
                                    style={{ backgroundImage: `url('${feature.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Amenities Grid */}
                    <div className="flex flex-col gap-10 py-10">
                        <div className="flex flex-col gap-4 text-center">
                            <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">Club Amenities</h2>
                            <p className="text-gray-400 text-base max-w-[600px] mx-auto">
                                Everything you need for a comfortable and convenient session.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {amenities.map((amenity, idx) => (
                                <div
                                    key={idx}
                                    className="group flex flex-1 gap-4 rounded-xl border border-[#28392e] bg-[#152319] p-6 flex-col hover:border-yellow-400/50 transition-colors"
                                >
                                    <div className="size-12 rounded-full bg-[#0d1b11] flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">{amenity.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-lg font-bold leading-tight">{amenity.title}</h3>
                                        <p className="text-gray-400 text-sm leading-normal">{amenity.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-black text-2xl font-bold">Detail Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`${img.span} relative rounded-lg overflow-hidden group cursor-pointer`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${img.url}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white font-medium">{img.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="border-t border-[#28392e] bg-[#152319] px-4 md:px-40 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1080px] mx-auto">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h2 className="text-white text-2xl font-bold">Ready to play?</h2>
                        <p className="text-gray-400">Book your table now and experience the best facilities in town.</p>
                    </div>
                    <button className="min-w-[200px] h-12 px-6 bg-yellow-400 hover:bg-[#0eb846] text-[#102216] text-lg font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(17,212,82,0.3)] hover:shadow-[0_0_30px_rgba(17,212,82,0.5)]">
                        Book a Table
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ClubFaci;