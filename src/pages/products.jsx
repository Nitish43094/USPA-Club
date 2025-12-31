import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Cues", "Accessories", "Apparel", "Tables"];

    const products = [
        {
            id: 1,
            name: "Professional Snooker Cue",
            category: "Cues",
            price: 12999,
            image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=500&fit=crop",
            description: "Premium ash wood cue with leather grip",
            inStock: true
        },
        {
            id: 2,
            name: "Cue Case - Deluxe",
            category: "Accessories",
            price: 2499,
            image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=500&h=500&fit=crop",
            description: "Hard shell case for 2 cues",
            inStock: true
        },
        {
            id: 3,
            name: "Premium Chalk Set",
            category: "Accessories",
            price: 299,
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=500&fit=crop",
            description: "Pack of 12 professional grade chalks",
            inStock: true
        },
        {
            id: 4,
            name: "Club T-Shirt",
            category: "Apparel",
            price: 899,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
            description: "Official US&PA Club branded t-shirt",
            inStock: true
        },
        {
            id: 5,
            name: "Cue Tip Shaper",
            category: "Accessories",
            price: 599,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
            description: "Professional tip shaper and scuffer",
            inStock: true
        },
        {
            id: 6,
            name: "Training Cue Ball",
            category: "Accessories",
            price: 1299,
            image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=500&fit=crop",
            description: "Marked cue ball for spin training",
            inStock: false
        },
        {
            id: 7,
            name: "Club Hoodie",
            category: "Apparel",
            price: 1899,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
            description: "Premium cotton hoodie with club logo",
            inStock: true
        },
        {
            id: 8,
            name: "Mini Pool Table",
            category: "Tables",
            price: 45999,
            image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=500&fit=crop",
            description: "6ft home practice table",
            inStock: true
        },
        {
            id: 9,
            name: "Cue Extension",
            category: "Accessories",
            price: 1499,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
            description: "Telescopic cue extension",
            inStock: true
        }
    ];

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070')"
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
            <section className="py-8 px-4 md:px-10 max-w-[1280px] mx-auto w-full border-b border-gray-200 dark:border-[#28392e]">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${selectedCategory === category
                                ? "bg-yellow-400 text-[#102216] shadow-lg"
                                : "bg-white dark:bg-[#152319] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#28392e] hover:border-yellow-400"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <div className="absolute top-3 right-3 bg-yellow-400 text-[#102216] px-3 py-1 rounded-full text-xs font-bold">
                                    {product.category}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-[#28392e]">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-gray-900 dark:text-white">
                                            &#x20B9;{product.price.toLocaleString()}
                                        </span>
                                    </div>

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
            <section className="py-16 px-4 md:px-10 bg-gradient-to-br ">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[#102216] mb-4">
                        Need Help Choosing?
                    </h2>
                    <p className="text-[#102216] text-lg mb-8 max-w-2xl mx-auto">
                        Our expert staff can help you select the perfect equipment for your skill level and playing style.
                    </p>
                    <button
                        onClick={() => navigate("/contact")}
                        className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-yellow-500 text-black font-bold hover:bg-black transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
}
