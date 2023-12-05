// components/ResultSummary.tsx

import { FC } from 'react';

interface ResultSummaryProps {
    totalResults: number;
    query: string;
}

const ResultSummary: FC<ResultSummaryProps> = ({ totalResults, query }) => {
    return (
        <p className="text-gray-600 text-sm mb-4">
            {totalResults} results for {query}
        </p>
    );
};

export default ResultSummary;
