'use client'
import { createContext, useState, useEffect, ReactNode } from 'react';
import { Post, allPosts } from '../../../.contentlayer/generated';


interface ISearchArticles {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    filteredPosts: Post[];
}

export const SearchArticlesContext = createContext<ISearchArticles>({
    filteredPosts: [],
    searchTerm: '',
    setSearchTerm: () => { },
});

interface SearchArticlesProviderProps {
    children: ReactNode;
}

const SearchArticlesProvider = ({ children }: SearchArticlesProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

    useEffect(() => {
        // Filter posts based on search term
        const filtered = allPosts.filter(post =>
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description?.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredPosts(filtered);
    }, [searchTerm]);

    const contextValue: ISearchArticles = {
        searchTerm,
        setSearchTerm,
        filteredPosts,
    };

    return (
        <SearchArticlesContext.Provider value={contextValue}>
            {children}
        </SearchArticlesContext.Provider>
    );
};

export default SearchArticlesProvider