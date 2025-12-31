import { useState } from "react";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Calendar = () => {
    const todayDate = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
    );

    const currentMonth = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    const today = todayDate.getDate();
    const todayMonth = todayDate.getMonth();
    const todayYear = todayDate.getFullYear();

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const prevMonthDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
    ).getDate();

    const startDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const handlePrev = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNext = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };
    return (
        <div className="bg-[#152319] rounded-xl border border-[#28392e] p-5">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold text-lg">{currentMonth}</h4>
                <div className="flex gap-1">
                    <button
                        onClick={handlePrev}
                        className="p-1 rounded hover:bg-[#28392e] text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-1 rounded hover:bg-[#28392e] text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="text-xs font-medium text-gray-500">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {/* Previous Month Days */}
                {Array.from({ length: startDay }, (_, i) => (
                    <div key={`prev-${i}`} className="py-2 text-gray-700">
                        {prevMonthDays - startDay + i + 1}
                    </div>
                ))}

                {/* Current Month Days */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                    <div
                        key={day}
                        className={`py-2 rounded cursor-pointer transition-colors ${day === 15 && todayMonth === currentDate.getMonth()
                                ? "bg-yellow-400 text-[#102216] font-bold shadow-lg shadow-yellow-400/20"
                                : day === 20 && todayMonth === currentDate.getMonth()
                                    ? "bg-[#28392e] text-white font-bold border border-yellow-400/30"
                                    : day === today &&
                                        todayMonth === currentDate.getMonth() &&
                                        todayYear === currentDate.getFullYear()
                                        ? "bg-blue-500 text-white font-bold"
                                        : "text-gray-300 hover:bg-[#28392e]"
                            }`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div> Major Tournament
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-[#28392e] border border-yellow-400/30"></div> League Match
                </div>
            </div>
        </div>

    )
}
export default Calendar;