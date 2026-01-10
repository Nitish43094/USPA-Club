import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/Products/P1.jpeg'
import img2 from '../assets/Products/P2.jpeg'
import img3 from '../assets/Products/P3.jpeg'
import img4 from '../assets/Products/P4.jpeg'
import img5 from '../assets/Products/P5.jpeg'
import img6 from '../assets/Products/P6.jpeg'
import img7 from '../assets/Products/P7.jpeg'
import img8 from '../assets/Products/P8.jpeg'
import img9 from '../assets/Products/P9.jpeg'
import img10 from '../assets/Products/P10.jpeg'
import img11 from '../assets/Products/P11.jpeg'
import img12 from '../assets/Products/P12.jpeg'
import img13 from '../assets/Products/P13.jpeg'
import img14 from '../assets/Products/P14.jpeg'
import img15 from '../assets/Products/P15.jpeg'
import img16 from '../assets/Products/P16.jpeg'
import img17 from '../assets/Products/P17.jpeg'
import img18 from '../assets/Products/Traingle-chalk-box-spruce.jpeg'
import img19 from '../assets/Products/Traingle-pro-chalk-box-spruce.jpeg'
import img20 from '../assets/Products/P20.jpeg'
import img21 from '../assets/Products/P21.jpeg'
import img22 from '../assets/Products/P22.jpeg'
import img23 from '../assets/Products/P23.jpeg'



export default function Products() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Cues", "Accessories", "Apparel", "Tables"];
    // const categories = ["All"];
    const products = [
        {
            id: 1,
            name: "Premium Cue Case",
            category: "Cues",
            image: img1,
            description: "High-quality hard cue case designed to protect your cue from damage",
            inStock: true
        },
        {
            id: 2,
            name: "Premium Cue Case",
            category: "Cues",
            image: img2,
            description: "Durable hard shell cue case for carrying and storing two cues safely",
            inStock: true
        },
        {
            id: 3,
            name: "Premium BLP Cue",
            category: "Cues",
            image: img3,
            description: "Professional BLP cue made from premium wood for smooth and accurate shots",
            inStock: true
        },
        {
            id: 4,
            name: "Chalk",
            category: "Apparel",
            image: img4,
            description: "High-quality billiard chalk for better grip and improved shot control",
            inStock: true
        },
        {
            id: 5,
            name: "Premium Cue",
            category: "Cues",
            image: img5,
            description: "Premium quality cue designed for accuracy, balance, and durability",
            inStock: true
        },
        {
            id: 6,
            name: "Premium Cue",
            category: "Cues",
            image: img6,
            description: "Well-balanced professional cue for smooth and powerful gameplay",
            inStock: true
        },
        {
            id: 7,
            name: "Premium Cue",
            category: "Cues",
            image: img7,
            description: "High-end cue crafted for professional and advanced players",
            inStock: true
        },
        {
            id: 8,
            name: "Premium Cue",
            category: "Cues",
            image: img8,
            description: "Top-grade premium cue offering excellent grip and shot precision",
            inStock: true
        },
        {
            id: 9,
            name: "Premium Cover",
            category: "Accessories",
            image: img9,
            description: "Protective cue cover to keep your cue safe from dust and scratches",
            inStock: true
        },
        {
            id: 10,
            name: "Premium Cover",
            category: "Cues",
            image: img10,
            description: "Stylish and durable cue cover for safe storage and transport",
            inStock: true
        },
        {
            id: 11,
            name: "Premium Cover",
            category: "Accessories",
            image: img11,
            description: "Hard protective cue cover to prevent wear and physical damage",
            inStock: true
        },
        {
            id: 12,
            name: "Chalk Holder",
            category: "Accessories",
            image: img12,
            description: "Convenient chalk holder to keep your chalk secure while playing",
            inStock: true
        },
        {
            id: 13,
            name: "Premium Cue",
            category: "Apparel",
            image: img13,
            description: "Premium quality cue designed for smooth shots and professional performance",
            inStock: true
        },
        {
            id: 14,
            name: "Training Cue Ball",
            category: "Accessories",
            image: img14,
            description: "Special training cue ball used to practice spin and shot accuracy",
            inStock: true
        },
        {
            id: 15,
            name: "Chalk",
            category: "Accessories",
            image: img15,
            description: "Professional billiard chalk for consistent grip on the cue tip",
            inStock: false
        },
        {
            id: 16,
            name: "Chalk",
            category: "Apparel",
            image: img16,
            description: "High-quality pool chalk designed for better ball control",
            inStock: true
        },
        {
            id: 17,
            name: "Blue Billiard Chalk",
            category: "Tables",
            image: img17,
            description: "Premium blue chalk that improves grip and reduces miscues",
            inStock: true
        },
        {
            id: 18,
            name: "Chalk box",
            category: "Accessories",
            image: img18,
            description: "Storage box for keeping multiple chalk pieces organized",
            inStock: true
        },
        {
            id: 19,
            name: "Chalk Box",
            category: "Accessories",
            image: img19,
            description: "Compact chalk box for easy carrying and protection of chalk",
            inStock: false
        },
        {
            id: 20,
            name: "Cue Tips",
            category: "Apparel",
            image: img20,
            description: "High-quality cue tips designed for better grip and shot accuracy",
            inStock: true
        },
        {
            id: 21,
            name: "Cue Tips",
            category: "Tables",
            image: img21,
            description: "Professional cue tips suitable for practice and competitive play",
            inStock: true
        },
        {
            id: 22,
            name: "LP Cue Tips",
            category: "Accessories",
            image: img22,
            description: "LP branded cue tips offering long-lasting performance and precision",
            inStock: true
        },
        {
            id: 23,
            name: "Century Tips",
            category: "Apparel",
            image: img23,
            description: "Century brand cue tips for consistent and powerful shots",
            inStock: true
        },
        {
            id: 24,
            name: "Blue Billiard Chalk",
            category: "Tables",
            image: img17,
            description: "Premium blue billiard chalk for smooth strokes and improved control",
            inStock: true
        }
    ];


    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="flex flex-col mt-[-5px] min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuBcmNoJ-MwA51zssvqEBchGjxJXYiSP7t6-m8WXe1VyIhLMTnY9AIIHnL4Gxu3Ca39roIOhCh-p7T3OufLfZy1GJIhLETmqQIrvvPPaJBDhQVGlVuQo9HeLYR9XbQEAc49tgQoY4gWJg7iXbCa8j0V8-h78quBqNxxsc6H4RRa4vfQg6HNgLb2_gkAL5Ub4ul5r5bjgRh5aREEpOPt7ScIebU_rC03N57vGkcPtB6YGHuaT1fGwNNpxF3wZ3dHnt7jhk2vxfMRwkb')"
                    }}
                >
                    <div className="absolute inset-0 bg-[#0f0f0f74] from-[#102216]/60 via-[#102216]/80 to-background-dark"></div>
                </div>

                <div className="relative z-10 max-w-4xl text-center px-4 flex flex-col items-center gap-6">
                    <span className="inline-block w-max px-3 py-1 border-[0.001rem] border-yellow-300 bg-[#f1cb0c4b] text-yellow-400 text-[0.8rem] uppercase font-bold rounded-full">
                        Club Store
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-white">
                        Premium <span className="text-yellow-400">Equipment</span> & Gear
                    </h1>

                    <p className="text-gray-200 xl:text-[1.3rem] md:text-xl max-w-2xl font-normal leading-relaxed">
                        Elevate your game with professional-grade equipment and exclusive club merchandise.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-black border-y border-[#28392e] py-6">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${selectedCategory === category
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


            {/* Products Grid */}
            <section className="py-16 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-[#28392e] bg-white dark:bg-[#152319] hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-[#0d1b11]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                                            Out of Stock
                                        </span>
                                    </div>
                                )}
                                {/* <div className="absolute top-3 right-3 bg-yellow-400 text-[#102216] px-3 py-1 rounded-full text-xs font-bold">
                                    {product.category}
                                </div> */}
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-[1.1rem] font-bold text-gray-900 dark:text-white">
                                    {product.name}
                                </h3>
                                <p className="text-[0.7rem] text-gray-600 dark:text-gray-400">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-[#28392e]">
                                    {/* Price of Products */}
                                    {/* <div className="flex flex-col">
                                        <span className="text-2xl font-black text-gray-900 dark:text-white">
                                            &#x20B9;{product.price.toLocaleString()}
                                        </span>
                                    </div> */}

                                    <button
                                        onClick={() => navigate("/contact")}
                                        disabled={!product.inStock}
                                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${product.inStock
                                            ? "bg-yellow-400 text-[#102216] hover:bg-black hover:text-white"
                                            : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                            }`}
                                    >
                                        {product.inStock ? "Inquire" : "Unavailable"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
                            inventory_2
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No products found in this category
                        </p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-10 bg-gradient-to-br bg-gray-100">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[#102216] mb-4">
                        Need Help Choosing?
                    </h2>
                    <p className="text-[#102216] text-lg mb-8 max-w-2xl mx-auto">
                        Our expert staff can help you select the perfect equipment for your skill level and playing style.
                    </p>
                    <button
                        onClick={() => navigate("/contact")}
                        className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-yellow-500 text-black font-bold hover:bg-black hover:text-white transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
}
