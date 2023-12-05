// components/RatingGroup.tsx

import { FC, useState } from 'react';
import RatingButton from './RatingButton';

interface RatingGroupProps {
    isVisible: boolean;
    onRatingChange: (newRating: number) => void;
    rating: number;
}

const RatingGroup: FC<RatingGroupProps> = ({isVisible, rating, onRatingChange}) => {
    const handleClick = (ratingValue: number) => {
        onRatingChange(ratingValue);
    };

    return (
        <div className="flex">
            {[0, 1, 2, 3, 4].map(index => (
                <RatingButton
                    key={index}
                    name={["x", "down", "check", "up", "star"][index]}
                    tip={["terrible", "bad", "okay", "good", "awesome"][index]}
                    isActive={rating === index}
                    isVisible={isVisible || rating === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default RatingGroup;
