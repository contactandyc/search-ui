// components/results/Result.tsx

import { FC, useState } from 'react';
import WebResult from './result_types/WebResult';
import RatingGroup from './RatingGroup'; // Make sure to import the StarRating component

interface ResultProps {
    data: any; // Replace with specific type or union of types.
    query: string;
    onRatingChange: (newRating: number) => void;
    rating: number;
}

const Result: FC<ResultProps> = ({ data, query, rating, onRatingChange }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className="flex border-b border-gray-200 py-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex-grow">
                <WebResult {...data} query={query} />
            </div>
            <div className="flex-shrink-0">
                <RatingGroup isVisible={isHovering} rating={rating} onRatingChange={onRatingChange} />
            </div>
        </div>
    );
};

export default Result;
