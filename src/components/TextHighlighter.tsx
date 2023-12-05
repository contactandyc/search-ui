// components/TextHighlighter.tsx

import { FC } from 'react';

interface TextHighlighterProps {
    text: string;
    query: string;
}

const TextHighlighter: FC<TextHighlighterProps> = ({ text, query }) => {
    if (!query.trim()) {
        return <>{text}</>;
    }

    // Split the query string into an array of words and escape special characters for regex
    const tokens = query.split(' ').filter((token) => token).map(token => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    // Create a regex to match any of the tokens
    const regex = new RegExp(`(${tokens.join('|')})`, 'gi');

    // Split the text into parts by the regex and then check if each part matches
    const parts = text.split(regex);

    return (
        <>
            {parts.filter(part => part).map((part, index) => {
                // Check if the part matches any of the tokens
                return regex.test(part) ?
                    <mark key={index} className="bg-yellow-200">{part}</mark> :
                    <span key={index}>{part}</span>;
            })}
        </>
    );
};

export default TextHighlighter;
