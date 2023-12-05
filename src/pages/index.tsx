// pages/search-results.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import ResultList from '../components/ResultList';
import ResultSummary from '../components/ResultSummary';
import Pagination from '../components/Pagination';
import NoResults from '../components/NoResults';
import LoadingIndicator from '../components/LoadingIndicator';
import useWindowSize from '../components/useWindowSize';

import { useMessage } from '../contexts/MessageContext';


const SearchResultsPage = () => {
    const router = useRouter();
    const { reportMessage } = useMessage();

    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(null);
    const totalPages = Math.ceil(totalResults / 10); // Assuming 10 results per page

    const { query: routerQuery, page: routerPage } = router.query;
    const searchQuery = typeof routerQuery === 'string' ? routerQuery : '';
    const currentPage = typeof routerPage === 'string' ? parseInt(routerPage, 10) : 1;
    const size = useWindowSize();
    const mobile = size.width <= 768;
    const maxPageNumbers = mobile ? 5 : 10;
    const mainClasses = mobile ? "container" : "container mx-auto"

    useEffect(() => {
        if (searchQuery) {
            fetchSearchResults();
        }
    }, [searchQuery, currentPage]);

    const handleSearch = (newQuery: string) => {
        router.push(`/?query=${encodeURIComponent(newQuery)}&page=1`);
    };

    const changePage = (pageNumber: number) => {
        router.push(`/?query=${encodeURIComponent(searchQuery)}&page=${pageNumber}`);
    };


    const fetchSearchResults = async () => {
        setIsLoading(true);
        setError(null);

        // Simulate a network request delay

        reportMessage('Loading!', 'tip');
        await new Promise(resolve => setTimeout(resolve, 1000));
        reportMessage('Loaded!', 'tip');

        // Mock data - replace with actual API call
        const mockResults = [
            { id: "1", title: "First Result", url: "https://example.com/1", snippet: "This is the first search result snippet." },
            { id: "2", title: "Second Result", url: "https://example.com/2", snippet: "This is the second search result snippet." },
            { id: "3", title: "Third Result", url: "https://example.com/3", snippet: "This is the third search result snippet." },
            { id: "4", title: "Fourth Result", url: "https://example.com/4", snippet: "This is the fourth search result snippet." },
            { id: "5", title: "Fifth Result", url: "https://example.com/5", snippet: "This is the fifth search result snippet." },
            { id: "6", title: "Sixth Result", url: "https://example.com/6", snippet: "This is the sixth search result snippet." },
            { id: "7", title: "Seventh Result", url: "https://example.com/7", snippet: "This is the seventh search result snippet." },
            // ... more results
        ];

        if (searchQuery) {
            setResults(mockResults);
            setTotalResults(2500);
        } else {
            setResults([]);
            setTotalResults(0);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
            <main className={mainClasses}>
                {isLoading ? (
                    <LoadingIndicator />
                ) : error ? (
                    <div>Error: {error}</div>
                ) : results.length > 0 ? (
                    <>
                        <ResultSummary totalResults={totalResults} query={searchQuery} />
                        <ResultList results={results} query={searchQuery} />
                        <Pagination currentPage={currentPage} totalPages={totalPages}
                            onPageChange={changePage} maxPageNumbers={maxPageNumbers} />
                    </>
                ) : (
                    <NoResults />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SearchResultsPage;
