// components/ResultList.tsx

import { FC, useState } from 'react';
import Result from './Result';

interface ResultListProps {
    results: any[]; // Replace any with a specific type that matches your data structure.
    query: string;
}

const ResultList: FC<ResultListProps> = ({ results, query }) => {
    const [ratings, setRatings] = useState<{ [key: string]: number }>({});

    const handleRatingChange = (key: string, newRating: number) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [key]: newRating
        }));
    };

    return (
        <div>
            {results.map((result, index) => (
                <Result
                    key={index}
                    data={result}
                    query={query}
                    rating={ratings[result.id] || -1} // Assuming each result has a unique 'id'
                    onRatingChange={(newRating) => handleRatingChange(result.id, newRating)}
                />
            ))}
        </div>
    );
};

export default ResultList;
