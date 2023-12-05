// components/SearchBar.tsx

import { FC, useState, useEffect } from 'react';
import SearchButton from './SearchButton';


interface SearchBarProps {
    onSearch: (query: string) => void;
    searchQuery: string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, searchQuery }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        setQuery(searchQuery);
    }, [searchQuery]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-grow">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-2xl flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
                placeholder="Search..."
            />
            <SearchButton onClick={handleSubmit} />
        </form>
    );
};

export default SearchBar;
