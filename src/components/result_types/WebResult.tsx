// components/Result.tsx

import { FC, useState } from 'react';
import TextHighlighter from '../TextHighlighter';

interface ResultProps {
    title: string;
    url: string;
    snippet: string;
    query: string; // Added the query prop
    onRatingChange: (newRating: number) => void; // Callback function when rating changes
}

const WebResult: FC<ResultProps> = ({ title, url, snippet, query, onRatingChange }) => {
    return (
        <>
            <a href={url} className="text-blue-600 hover:underline">
                <h2 className="text-xl font-semibold">
                    <TextHighlighter text={title} query={query} />
                </h2>
            </a>
            <p className="text-gray-600">{url}</p>
            <p>
                <TextHighlighter text={snippet} query={query} />
            </p>
        </>
    );
};

export default WebResult;
