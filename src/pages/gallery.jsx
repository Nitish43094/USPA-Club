import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/galleryImg1.jpeg'
import img2 from '../assets/galleryImg2.jpeg'
import img3 from '../assets/galleryImg3.jpeg'
import img4 from '../assets/galleryImg4.jpeg'
import img5 from '../assets/galleryImg5.jpeg'
import img6 from '../assets/galleryImg6.jpeg'
import img7 from '../assets/galleryImg7.jpeg'
import img8 from '../assets/Table.jpeg'
import img9 from '../assets/aman1.jpeg'
import img10 from '../assets/aman2.jpeg'
import img11 from '../assets/aman3.jpeg'
export default function Gallery() {
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeLightbox = () => setSelectedIndex(null);

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === filteredImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? filteredImages.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    // Gallery images - you can replace these with your actual images
    const galleryImages = [
        {
            id: 1,
            src: img8,
            title: "Professional Table",
            category: "Tables"
        },
        {
            id: 2,
            src: img5,
            title: "Chalking the Cue",
            category: "Equipment"
        },
        {
            id: 3,
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuBcmNoJ-MwA51zssvqEBchGjxJXYiSP7t6-m8WXe1VyIhLMTnY9AIIHnL4Gxu3Ca39roIOhCh-p7T3OufLfZy1GJIhLETmqQIrvvPPaJBDhQVGlVuQo9HeLYR9XbQEAc49tgQoY4gWJg7iXbCa8j0V8-h78quBqNxxsc6H4RRa4vfQg6HNgLb2_gkAL5Ub4ul5r5bjgRh5aREEpOPt7ScIebU_rC03N57vGkcPtB6YGHuaT1fGwNNpxF3wZ3dHnt7jhk2vxfMRwkb",
            title: "Game Night",
            category: "Atmosphere"
        },
        {
            id: 4,
            src: img4,
            title: "Tournament Ready",
            category: "Events"
        },
        {
            id: 5,
            src: img2,
            title: "Perfect Shot",
            category: "Action"
        },
        {
            id: 6,
            src: img6,
            title: "Premium Equipment",
            category: "Equipment"
        },
        {
            id: 7,
            src: img1,
            title: "Club Atmosphere",
            category: "Atmosphere"
        },
        {
            id: 8,
            src: img3,
            title: "Championship Tables",
            category: "Tables"
        },
        {
            id: 9,
            src: img2,
            title: "Tournament Action",
            category: "Events"
        },
        // {
        //     id: 10,
        //     src:img9,
        //     title: "Tournament Action",
        //     category: "Winner"
        // },
        // {
        //     id: 11,
        //     src:img11,
        //     title: "Championship Tables",
        //     category: "Tables"
        // },
        // {
        //     id: 12,
        //     src:img10,
        //     title: "Tournament Action",
        //     category: "Events"
        // }
    ];

    const categories = ["All", "Tables", "Equipment", "Atmosphere", "Events", "Action"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="flex flex-col mt-[-5px] min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">
            {/* ================= HERO ================= */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuBcmNoJ-MwA51zssvqEBchGjxJXYiSP7t6-m8WXe1VyIhLMTnY9AIIHnL4Gxu3Ca39roIOhCh-p7T3OufLfZy1GJIhLETmqQIrvvPPaJBDhQVGlVuQo9HeLYR9XbQEAc49tgQoY4gWJg7iXbCa8j0V8-h78quBqNxxsc6H4RRa4vfQg6HNgLb2_gkAL5Ub4ul5r5bjgRh5aREEpOPt7ScIebU_rC03N57vGkcPtB6YGHuaT1fGwNNpxF3wZ3dHnt7jhk2vxfMRwkb')"
                    }}
                >
                    <div className="absolute inset-0 bg-[#0f0f0f90] from-[#102216]/60 via-[#102216]/80 to-background-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl text-center px-4 flex flex-col items-center gap-6">
                    <span className="inline-block w-max px-3 py-1 border-[0.001rem] border-yellow-300 bg-[#f1cb0c4b] text-yellow-400 text-[0.8rem] uppercase font-bold rounded-full">
                        Photo Gallery
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-white">
                        Moments at <span className="text-yellow-400">The Break Room</span>
                    </h1>

                    <p className="text-gray-200 xl:text-[1.3rem] md:text-xl max-w-2xl font-normal leading-relaxed text-shadow">
                        Explore our premium facilities, championship tables, and vibrant community atmosphere.
                    </p>
                </div>
            </section>

            {/* ================= CATEGORY FILTER ================= */}
            <section className="bg-black border-y border-[#28392e] py-6">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeCategory === category
                                    ? "bg-yellow-400 text-[#102216] shadow-[0_0_20px_rgba(241,203,12,0.4)]"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= GALLERY GRID ================= */}
            <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-[#152319] aspect-square cursor-pointer border border-gray-200 dark:border-[#28392e] hover:border-primary/50 transition-all duration-300"
                            onClick={() =>
                                setSelectedIndex(
                                    filteredImages.findIndex(
                                        (img) => img.id === image.id
                                    )
                                )
                            }
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-yellow-400 text-[#102216] text-xs font-bold px-2 py-1 rounded w-fit mb-2">
                                    {image.category}
                                </div>
                                <h3 className="text-white text-xl font-bold">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No images found in this category.
                        </p>
                    </div>
                )}
            </section>

            {/* ================= IMAGE MODAL ================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
                        >
                            <span className="material-symbols-outlined text-4xl">close</span>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full h-auto rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-4 text-center">
                            <div className="inline-block bg-yellow-400 text-[#102216] text-xs font-bold px-3 py-1 rounded mb-2">
                                {selectedImage.category}
                            </div>
                            <h3 className="text-white text-2xl font-bold">
                                {selectedImage.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {selectedIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        onClick={closeLightbox}
                    >
                        ✕
                    </button>

                    {/* Previous Button */}
                    <button
                        className="absolute left-4 md:left-10 text-white text-5xl select-none"
                        onClick={prevImage}
                    >
                        ❮
                    </button>

                    {/* Image */}
                    <img
                        src={filteredImages[selectedIndex].src}
                        alt=""
                        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
                    />

                    {/* Next Button */}
                    <button
                        className="absolute right-4 md:right-10 text-white text-5xl select-none"
                        onClick={nextImage}
                    >
                        ❯
                    </button>
                </div>
            )}

            {/* ================= CTA SECTION ================= */}
            <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <div className="text-center">
                    <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Ready to Experience It?
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mb-8 mx-auto">
                        Visit us today and become part of the city's premier snooker community.
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
}