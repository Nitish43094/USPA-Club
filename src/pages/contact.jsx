import React, { useState } from "react";
import toast from "react-hot-toast";
import uspaLocation from "../assets/USPA Location.png"
import { SiInstagram } from "react-icons/si";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        toast.success("Send Successfull")
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">

            {/* ================= MAIN CONTENT ================= */}
            <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-8 lg:px-40 mt-16">

                {/* Header Section */}
                <div className="w-full max-w-[1024px] mb-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111813] dark:text-white mb-3">
                        Get in Touch
                    </h1>
                    <p className="text-[#4b5563] dark:text-gray-400 text-lg max-w-2xl">
                        Have a question, want to book a private table, or interested in membership? We're here to help you cue up the perfect experience.
                    </p>
                </div>

                {/* Split Content Area */}
                <div className="w-full max-w-[1024px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-[#152319] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-[#28392e] shadow-sm">
                            <h2 className="text-2xl font-bold text-[#111813] dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">edit_note</span>
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-[#111813] dark:text-white uppercase tracking-wider">
                                            Name
                                        </span>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#28392e] bg-gray-50 dark:bg-[#0d1b11] text-[#111813] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400"
                                            placeholder="John Doe"
                                            type="text"
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-[#111813] dark:text-white uppercase tracking-wider">
                                            Email
                                        </span>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#28392e] bg-gray-50 dark:bg-[#0d1b11] text-[#111813] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400"
                                            placeholder="john@example.com"
                                            type="email"
                                            required
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-[#111813] dark:text-white uppercase tracking-wider">
                                        Phone (Optional)
                                    </span>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 dark:border-[#28392e] bg-gray-50 dark:bg-[#0d1b11] text-[#111813] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400"
                                        placeholder="+1 (555) 000-0000"
                                        type="tel"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-[#111813] dark:text-white uppercase tracking-wider">
                                        Subject
                                    </span>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 dark:border-[#28392e] bg-gray-50 dark:bg-[#0d1b11] text-[#111813] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Table Booking</option>
                                        <option>Membership Application</option>
                                        <option>Event Hosting</option>
                                    </select>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-[#111813] dark:text-white uppercase tracking-wider">
                                        Message
                                    </span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 dark:border-[#28392e] bg-gray-50 dark:bg-[#0d1b11] text-[#111813] dark:text-white p-4 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 resize-none"
                                        placeholder="Tell us how we can help..."
                                        rows="5"
                                        required
                                    />
                                </label>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 h-12 bg-yellow-400 hover:bg-[#0eb846] text-[#102216] font-bold rounded-lg transition-all transform active:scale-95 shadow-[0_0_20px_rgba(17,212,82,0.4)] hover:shadow-[0_0_30px_rgba(17,212,82,0.6)] flex items-center justify-center gap-2"
                                    >
                                        <span>Send Message</span>
                                        <span className="material-symbols-outlined text-[20px] font-bold">send</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 gap-4">

                            {/* Address */}
                            <div className="bg-white dark:bg-[#152319] p-5 rounded-xl border border-gray-200 dark:border-[#28392e] flex items-start gap-4 hover:border-primary/50 transition-colors">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                                        Visit Us
                                    </h3>
                                    <p className="text-[#111813] dark:text-white font-medium leading-relaxed">
                                        Ultimate Snooker and Pool arena , Steelcraft Buliding,10 Diagonal Road ,
                                        <br />
                                        Near Royal Enfield Service Centre and Wine Shop
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="bg-white dark:bg-[#152319] p-5 rounded-xl border border-gray-200 dark:border-[#28392e] flex items-start gap-4 hover:border-primary/50 transition-colors">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                                        Call Us
                                    </h3>
                                    <p className="text-[#111813] dark:text-white font-medium leading-relaxed hover:text-primary transition-colors cursor-pointer">
                                        <a
                                            href="tel:+918877333321"
                                            className="hover:underline text-gray-700"
                                        >
                                            +91 8877333321
                                        </a>

                                        <span>/</span>
                                        <a
                                            href="tel:+918677859859"
                                            className="hover:underline text-gray-700"
                                        >
                                            86778 59859
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mon-Fri, 9am - 10pm</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white dark:bg-[#152319] p-5 rounded-xl border border-gray-200 dark:border-[#28392e] flex items-start gap-4 hover:border-primary/50 transition-colors">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                                        Email Us
                                    </h3>
                                    <p className="text-[#111813] dark:text-white font-medium leading-relaxed transition-colors cursor-pointer">
                                        <a
                                            href="mailto:ultimatesnookerarena@gmail.com"
                                            className="cursor-pointer hover:underline"
                                        >
                                            ultimatesnookerarena@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-white dark:bg-[#152319] p-5 rounded-xl border border-gray-200 dark:border-[#28392e] flex items-start gap-4 hover:border-primary/50 transition-colors">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                                        Club Hours
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between w-full min-w-[180px] gap-4">
                                            <span className="text-[#111813] dark:text-white font-medium">Mon - Thu</span>
                                            <span className="text-gray-500 dark:text-gray-400">2 PM - 12 AM</span>
                                        </div>
                                        <div className="flex justify-between w-full min-w-[180px] gap-4">
                                            <span className="text-[#111813] dark:text-white font-medium">Fri - Sat</span>
                                            <span className="text-gray-500 dark:text-gray-400">2 PM - 2 AM</span>
                                        </div>
                                        <div className="flex justify-between w-full min-w-[180px] gap-4">
                                            <span className="text-[#111813] dark:text-white font-medium">Sunday</span>
                                            <span className="text-gray-500 dark:text-gray-400">12 PM - 11 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <a
                            href="https://maps.app.goo.gl/vVt9mfWsE7RgG7eZ8?g_st=awb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative w-full h-[240px] rounded-xl overflow-hidden border border-gray-200 dark:border-[#28392e] group cursor-pointer shadow-lg">

                                <img
                                    alt="Stylized dark map view of Snooker City location"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100"
                                    src={uspaLocation}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102216] to-transparent pointer-events-none" />

                                {/* Custom Map Marker */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                                    <div className="size-12 bg-primary rounded-full flex items-center justify-center text-[#102216] shadow-[0_0_20px_rgba(17,212,82,0.6)] animate-bounce">
                                        <span className="material-symbols-outlined text-3xl">
                                            sports_bar
                                        </span>
                                    </div>
                                    <div className="mt-2 bg-[#152319] px-3 py-1 rounded-md border border-[#28392e] text-xs font-bold text-white shadow-lg">
                                        We are here
                                    </div>
                                </div>

                                {/* Open in Maps Badge */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white dark:bg-[#152319] text-[#111813] dark:text-white text-xs font-bold py-2 px-4 rounded-lg shadow-md border border-gray-200 dark:border-[#28392e] flex items-center gap-2">
                                        <span>Open in Maps</span>
                                        <span className="material-symbols-outlined text-[16px]">
                                            open_in_new
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </a>


                        {/* Social Links */}
                        <div className="flex gap-4 justify-center md:justify-start pt-2">
                            <a
                                href="https://www.facebook.com/share/17iZAuA37y/"
                                className="size-10 rounded-full bg-[#152319] border border-[#28392e] flex items-center justify-center text-white hover:bg-primary hover:text-[#102216] hover:border-primary transition-all duration-300"
                            >
                                <span className="font-bold text-lg">f</span>
                            </a>
                            <a
                                href="https://www.instagram.com/ultimatesnooker_poolarena?igsh=MTNhOGJsNHVsbXQ2cA%3D%3D&utm_source=qr"
                                className="size-10 rounded-full bg-[#152319] border border-[#28392e] flex items-center justify-center text-white hover:bg-primary hover:text-[#102216] hover:border-primary transition-all duration-300"
                            >
                                <span className="font-bold text-lg"><SiInstagram/></span>
                            </a>
                            {/* <a
                                href="#"
                                className="size-10 rounded-full bg-[#152319] border border-[#28392e] flex items-center justify-center text-white hover:bg-primary hover:text-[#102216] hover:border-primary transition-all duration-300"
                            >
                                <span className="font-bold text-lg">x</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}