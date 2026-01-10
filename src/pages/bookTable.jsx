import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookTable() {
    const [date, setDate] = useState('2026-01-01');
    const [duration, setDuration] = useState('2 Hours');
    const [startTime, setStartTime] = useState('17:00');
    const [selectedTable, setSelectedTable] = useState('Table 3');

    // New State for Customer Details
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberOfPlayers, setNumberOfPlayers] = useState('2');
    const [notes, setNotes] = useState('');

    const timeSlots = [
        { time: '12:00', status: 'available' },
        { time: '01:00', status: 'selected' }, // Matches default state
        { time: '02:00', status: 'available' },
        { time: '03:00', status: 'disabled' },
        { time: '04:00', status: 'available' },
        { time: '05:00', status: 'available' },
        { time: '07:00', status: 'available' },
        { time: '08:00', status: 'available' },
        { time: '09:00', status: 'available' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
    ];

    // Cost Calculation Logic
    const getHourlyRate = () => {
        // "The Arena" is the VIP Match Table
        if (selectedTable === 'The Arena') return 500;
        return 300; // Standard tables
    };

    const getDurationHours = () => {
        return parseInt(duration.split(' ')[0]);
    };

    const calculateCost = () => {
        const ratePerHour = getHourlyRate();
        const hours = getDurationHours();
        const playerCount = parseInt(numberOfPlayers);

        let baseCost = ratePerHour * hours;

        // Example logic: Extra fee for more than 2 players? 
        // Let's add a small surcharge per extra player per hour to make "number of players" relevant to cost as requested.
        // e.g., +50 per extra player per hour
        let extraPlayerCost = 0;
        if (playerCount > 2) {
            extraPlayerCost = (playerCount - 2) * 50 * hours;
        }

        const subtotal = baseCost + extraPlayerCost;
        const serviceFee = 50; // Fixed booking fee
        const total = subtotal + serviceFee;

        return {
            ratePerHour,
            hours,
            baseCost,
            extraPlayerCost,
            subtotal,
            serviceFee,
            total
        };
    };

    const costDetails = calculateCost();

    const handleBooking = async () => {
        const bookingDetails = {
            customerName,
            phoneNumber,
            tableId: selectedTable,
            date,
            duration,
            startTime,
            numberOfPlayers,
            notes,
            costBreakdown: costDetails
        };

        console.log("=== Table Booking Details ===");
        console.log(bookingDetails);
        console.log("=============================");

        alert(
            `Booking Confirmed for ${customerName}!\nTotal: ₹${costDetails.total.toFixed(2)}\nCheck console for details.`
        );


        try {
            // Send data to CRM API
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success
                toast.success(result.message || "Message sent successfully! We'll get back to you soon.");
                // Clear form
                setCustomerName("");
                setPhoneNumber("");
                setSelectedTable(null);
                setDate("");
                setDuration("");
                setStartTime("");
                setNumberOfPlayers(1);
                setNotes("");
            } else {
                // API returned error
                if (result.errors) {
                    // Display validation errors
                    const errorMessages = Object.values(result.errors).join(', ');
                    toast.error(errorMessages);
                } else {
                    toast.error(result.message || "Failed to send message. Please try again.");
                }
            }
        } catch (error) {
            // Network or other error
            console.error('Contact form error:', error);
            toast.error("Unable to send message. Please check your connection and try again.");
        }
    };


    return (
        <div className="flex flex-col mt-[-5px] min-h-screen bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased overflow-x-hidden">

            {/* Main Content Container */}
            <main className="flex flex-col items-center w-full">

                {/* Booking Section */}
                <div className="w-full mt-16 px-4 md:px-10 py-12 flex justify-center bg-surface-dark/30 border-t border-border-dark/50">
                    <div className="w-full max-w-[1280px] flex flex-col">
                        <h2 className="text-black text-3xl font-bold leading-tight tracking-tight mb-8">BOOK A TABLE</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* Left Column: Controls */}
                            <div className="lg:col-span-4 flex flex-col gap-6">

                                {/* Customer Details Form (NEW) */}
                                <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex flex-col gap-4">
                                    <h3 className="text-black font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        Your Details
                                    </h3>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Name</label>
                                        <input
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5 placeholder-white/30"
                                            type="text"
                                            placeholder="John Doe"
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Phone Number</label>
                                        <input
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5 placeholder-white/30"
                                            type="tel"
                                            placeholder="(555) 123-4567"
                                            value={phoneNumber}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                // Allow only digits and max 10 characters
                                                if (/^\d{0,10}$/.test(value)) {
                                                    setPhoneNumber(value);
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Number of Players</label>
                                        <select
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5"
                                            value={numberOfPlayers}
                                            onChange={(e) => setNumberOfPlayers(e.target.value)}
                                        >
                                            <option value="1">1 Player (Solo Practice)</option>
                                            <option value="2">2 Players (Standard)</option>
                                            <option value="3">3 Players (+&#x20B9;50/hr)</option>
                                            <option value="4">4 Players (+&#x20B9;100/hr)</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Notes (Optional)</label>
                                        <textarea
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5 placeholder-white/30 min-h-[80px]"
                                            placeholder="Need cues, specific balls, etc."
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex flex-col gap-4">
                                    <h3 className="text-black font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">calendar_month</span>
                                        Select Date &amp; Time
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Date</label>
                                        <input
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Duration</label>
                                        <select
                                            className="bg-background-dark border-border-dark rounded-lg text-white focus:ring-primary focus:border-primary w-full p-2.5"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        >
                                            <option>1 Hour</option>
                                            <option>2 Hours</option>
                                            <option>3 Hours</option>
                                            <option>4 Hours</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-medium text-black uppercase">Start Time</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    onClick={() => slot.status !== 'disabled' && setStartTime(slot.time)}
                                                    className={`
                                                        p-2 text-sm rounded border transition-colors
                                                        ${slot.status === 'disabled'
                                                            ? 'bg-background-dark border-border-dark text-white/30 cursor-not-allowed line-through'
                                                            : startTime === slot.time
                                                                ? 'bg-primary text-background-dark font-bold border-primary'
                                                                : 'bg-background-dark border-border-dark text-white hover:border-primary'
                                                        }
                                                    `}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Cost Summary */}
                                <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex flex-col gap-4">
                                    <h3 className="text-black font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">receipt_long</span>
                                        Booking Summary
                                    </h3>
                                    <div className="space-y-3 border-b border-white/10 pb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-black">
                                                {selectedTable === 'The Arena' ? 'VIP Table' : 'Standard Table'} ({costDetails.hours} hrs @ &#x20B9;{costDetails.ratePerHour}/hr)
                                            </span>
                                            <span className="text-black font-medium">&#x20B9;{costDetails.baseCost.toFixed(2)}</span>
                                        </div>
                                        {costDetails.extraPlayerCost > 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-black">Extra Players Fee</span>
                                                <span className="text-black font-medium">&#x20B9;{costDetails.extraPlayerCost.toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-sm">
                                            <span className="text-black">Service Fee</span>
                                            <span className="text-black font-medium">&#x20B9;{costDetails.serviceFee.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-primary">
                                            <span>Member Discount</span>
                                            <span className="font-medium">- &#x20B9;0.00</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-black">Total to pay</span>
                                            <span className="text-2xl font-black text-black">&#x20B9;{costDetails.total.toFixed(2)}</span>
                                        </div>
                                        <button
                                            onClick={handleBooking}
                                            className="bg-primary text-background-dark font-bold py-2.5 px-6 rounded-lg hover:brightness-110 shadow-lg shadow-primary/20"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Interactive Map */}
                            <div className="lg:col-span-8 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-black font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">map</span>
                                        Select Table
                                    </h3>
                                    <div className="flex gap-4 text-xs font-medium">
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-primary"></div> Selected</div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-background-dark border border-primary/50"></div> Available</div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-white/10"></div> Occupied</div>
                                    </div>
                                </div>

                                {/* Map Visualization */}
                                <div className="relative w-full h-[500px] bg-[#1a1a1a] rounded-xl border border-border-dark p-8 overflow-hidden shadow-inner group/map">
                                    {/* Floor Texture/Grid */}
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{ backgroundImage: 'radial-gradient(#3b5443 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                    ></div>

                                    {/* Entrance Label */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white/20 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1">Entrance</div>

                                    {/* Tables Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 h-full relative z-10 text-white">

                                        {/* Table 1 (Occupied) */}
                                        <div className="relative flex items-center justify-center">
                                            <div className="w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#2a2a2a] border-4 border-[#3a3a3a] relative shadow-lg opacity-50 cursor-not-allowed">
                                                <div className="absolute inset-2 bg-[#2d3830] rounded-sm"></div>
                                                <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            </div>
                                            <span className="absolute -bottom-6 text-xs font-bold text-white/30">Table 1</span>
                                        </div>

                                        {/* Table 2 (Available) */}
                                        <div
                                            className="relative flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('Table 2')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Table 2' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Table 2' ? 'bg-primary' : 'bg-primary/20 group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Table 2' ? (
                                                        <span className="material-symbols-outlined text-background-dark text-3xl font-bold">check</span>
                                                    ) : (
                                                        <span className="text-primary font-bold text-xs opacity-0 group-hover/table:opacity-100">SELECT</span>
                                                    )}
                                                </div>
                                                <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            </div>
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'Table 2' ? 'text-primary' : 'text-white/70'}`}>Table 2</span>
                                            {selectedTable === 'Table 2' && (
                                                <div className="absolute inset-0 w-36 h-56 bg-primary/20 rounded-xl blur-md animate-pulse -z-10 translate-x-[-15px] translate-y-[-15px]"></div>
                                            )}
                                        </div>

                                        {/* Table 3 (Selected in HTML default, Logic here handles it) */}
                                        <div
                                            className="relative flex items-center justify-center cursor-pointer group/table"
                                            onClick={() => setSelectedTable('Table 3')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-2xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Table 3' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Table 3' ? 'bg-primary' : 'bg-primary/20 group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Table 3' ? (
                                                        <span className="material-symbols-outlined text-background-dark text-3xl font-bold">check</span>
                                                    ) : (
                                                        <span className="text-primary font-bold text-xs opacity-0 group-hover/table:opacity-100">SELECT</span>
                                                    )}
                                                </div>
                                                <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            </div>
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'Table 3' ? 'text-primary' : 'text-white/70'}`}>Table 3</span>
                                            {selectedTable === 'Table 3' && (
                                                <div className="absolute inset-0 w-36 h-56 bg-primary/20 rounded-xl blur-md animate-pulse -z-10 translate-x-[-15px] translate-y-[-15px]"></div>
                                            )}
                                        </div>

                                        {/* Table 4 (Standard) */}
                                        <div
                                            className="relative flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('Table 4')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Table 4' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Table 4' ? 'bg-primary' : 'bg-[#2d3830] group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Table 4' && (
                                                        <span className="material-symbols-outlined text-background-dark text-3xl font-bold">check</span>
                                                    )}
                                                </div>
                                                <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full -m-1"></div>
                                            </div>
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'Table 4' ? 'text-primary' : 'text-white/70'}`}>Table 4</span>
                                            {selectedTable === 'Table 4' && (
                                                <div className="absolute inset-0 w-36 h-56 bg-primary/20 rounded-xl blur-md animate-pulse -z-10 translate-x-[-15px] translate-y-[-15px]"></div>
                                            )}
                                        </div>

                                        {/* Match Table (VIP) */}
                                        <div
                                            className="relative col-span-2 flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('The Arena')}
                                        >
                                            {/* <div className="absolute top-0 right-10 bg-gradient-to-r from-yellow-500 to-amber-600 text-[10px] font-black px-2 py-0.5 rounded text-background-dark uppercase">VIP Match Table</div> */}
                                            <div className={`
                                                w-56 h-36 md:w-72 md:h-44 rounded-md bg-[#4a3525] border-4 relative shadow-2xl transition-transform group-hover/table:scale-[1.02] rotate-0
                                                ${selectedTable === 'The Arena' ? 'border-yellow-500' : 'border-[#8d6e63]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'The Arena' ? 'bg-[#1f5c35]/80 border border-yellow-500/50' : 'bg-[#1a472a] group-hover/table:bg-[#1f5c35]'}
                                                `}>
                                                    <div className="w-1/2 h-px bg-white/10"></div>
                                                    <div className="h-1/2 w-px bg-white/10 absolute"></div>
                                                    {selectedTable === 'The Arena' && (
                                                        <span className="material-symbols-outlined text-yellow-500 text-3xl font-bold absolute">check</span>
                                                    )}
                                                </div>
                                                <div className="absolute top-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute top-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute top-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                                <div className="absolute bottom-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                            </div>
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'The Arena' ? 'text-yellow-500' : 'text-yellow-500/70'}`}>The Arena (Match Table)</span>
                                            {selectedTable === 'The Arena' && (
                                                <div className="absolute inset-0 w-full h-full bg-yellow-500/10 rounded-xl blur-md animate-pulse -z-10 bg-blend-soft-light"></div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                <p className="text-xs text-white/40 text-center italic">*Table layouts are indicative. Specific table numbers subject to availability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}