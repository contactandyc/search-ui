// components/SearchButton.tsx

import { FC } from 'react';

interface SearchButtonProps {
    onClick: (e: React.FormEvent) => void;
}

const SearchButton: FC<SearchButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
            <img src="/SearchButton.png" />
        </button>
    );
};

export default SearchButton;
