import { useState } from "react";

const CustomerRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center gap-2 mb-8 text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`material-symbols-outlined cursor-pointer text-2xl transition-colors ${
                        (hover || rating) >= star
                            ? "text-yellow-400"
                            : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                    star
                </span>
            ))}

            {rating > 0 && (
                <span className="text-gray-500 text-sm ml-2 font-medium">
                    You rated {rating}/5
                </span>
            )}
        </div>
    );
};

export default CustomerRating;
