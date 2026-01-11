import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function BookTable() {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [duration, setDuration] = useState('2 Hours');
    const [startTime, setStartTime] = useState('17:00');
    const [selectedTable, setSelectedTable] = useState('Table 2');

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
        if (selectedTable === 'Pool Table') return 180;
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
            totalAmount: costDetails.total
        };

        // Note: costBreakdown is calculated on backend usually, but we could send it if needed.
        // For security, usually backend recalculates. We'll send the core data.

        const loadingToast = toast.loading("Processing booking...");

        try {
            // Send data to CRM API
            // Using the production URL pattern but pointing to our new MVC route
            const response = await fetch('https://crm.ultimatesnookerandpoolarena.com/?route=bookings/api_store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails)
            });

            const result = await response.json();

            toast.dismiss(loadingToast);

            if (response.ok && result.success) {
                // Success
                toast.success(result.message || `Booking Confirmed for ${customerName}!`);

                // Clear form
                setCustomerName("");
                setPhoneNumber("");
                // keep table/date selected or reset? 
                // setDate(""); // Allow rebooking same day?
                // setDuration("2 Hours");
                setNotes("");
            } else {
                // API returned error
                const msg = result.message || "Failed to confirm booking.";
                toast.error(msg);
                console.error("Booking Error:", result);
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            // Network or other error
            console.error('Booking request error:', error);
            toast.error("Unable to connect to server. Please try again later.");
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

                                        {/* Table 1 (Available) - Originally Pool Table */}
                                        <div
                                            className="relative flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('Pool Table')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Pool Table' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Pool Table' ? 'bg-primary' : 'bg-primary/20 group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Pool Table' ? (
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
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'Pool Table' ? 'text-primary' : 'text-white/70'}`}>Pool Table</span>
                                            {selectedTable === 'Pool Table' && (
                                                <div className="absolute inset-0 w-36 h-56 bg-primary/20 rounded-xl blur-md animate-pulse -z-10 translate-x-[-15px] translate-y-[-15px]"></div>
                                            )}
                                        </div>

                                        {/* Table 1 (Available) - Originally Table 2 */}
                                        <div
                                            className="relative flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('Table 1')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Table 1' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Table 1' ? 'bg-primary' : 'bg-primary/20 group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Table 1' ? (
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
                                            <span className={`absolute -bottom-6 text-xs font-bold ${selectedTable === 'Table 1' ? 'text-primary' : 'text-white/70'}`}>Table 1</span>
                                            {selectedTable === 'Table 1' && (
                                                <div className="absolute inset-0 w-36 h-56 bg-primary/20 rounded-xl blur-md animate-pulse -z-10 translate-x-[-15px] translate-y-[-15px]"></div>
                                            )}
                                        </div>

                                        {/* Table 2 (Selected in HTML default) - Originally Table 3 */}
                                        <div
                                            className="relative flex items-center justify-center cursor-pointer group/table"
                                            onClick={() => setSelectedTable('Table 2')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-2xl transition-transform group-hover/table:scale-105
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

                                        {/* Table 3 (Standard) - Originally Table 4 */}
                                        <div
                                            className="relative flex items-center justify-center group/table cursor-pointer"
                                            onClick={() => setSelectedTable('Table 3')}
                                        >
                                            <div className={`
                                                w-24 h-40 md:w-28 md:h-48 rounded-md bg-[#3e2b20] border-4 relative shadow-xl transition-transform group-hover/table:scale-105
                                                ${selectedTable === 'Table 3' ? 'border-primary' : 'border-[#5d4037]'}
                                            `}>
                                                <div className={`
                                                    absolute inset-2 transition-colors rounded-sm flex items-center justify-center
                                                    ${selectedTable === 'Table 3' ? 'bg-primary' : 'bg-[#2d3830] group-hover/table:bg-primary/40'}
                                                `}>
                                                    {selectedTable === 'Table 3' && (
                                                        <span className="material-symbols-outlined text-background-dark text-3xl font-bold">check</span>
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

                                        {/* Match Table (VIP) - Occupied */}
                                        <div className="relative col-span-2 flex items-center justify-center">
                                            <div className="w-56 h-36 md:w-72 md:h-44 rounded-md bg-[#2a2a2a] border-4 border-[#3a3a3a] relative shadow-lg opacity-50 cursor-not-allowed rotate-0">
                                                <div className="absolute inset-2 bg-[#2d3830] rounded-sm flex items-center justify-center">
                                                    <div className="w-1/2 h-px bg-white/10"></div>
                                                    <div className="h-1/2 w-px bg-white/10 absolute"></div>
                                                </div>
                                                <div className="absolute top-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute top-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute top-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                                <div className="absolute bottom-0 left-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black rounded-full -m-1.5"></div>
                                                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-black rounded-full -m-1.5 -translate-x-1/2"></div>
                                            </div>
                                            <span className="absolute -bottom-6 text-xs font-bold text-white/30">The Arena (Match Table)</span>
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