import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Post, allPosts } from '../../../.contentlayer/generated';


interface ISearchArticles {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedTag: string;
    setSelectedTag: (tag: string) => void;
    filteredPosts: Post[];
}

export const SearchArticlesContext = createContext<ISearchArticles>({
    filteredPosts: [],
    searchTerm: '',
    selectedTag: '',
    setSearchTerm: () => { },
    setSelectedTag: () => { }
});

interface SearchArticlesProviderProps {
    children: ReactNode;
}

const SearchArticlesProvider: React.FC<SearchArticlesProviderProps> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);


    useEffect(() => {
        // Filter posts based on search term and selected tag
        const filtered = allPosts.filter(post =>
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.tags?.includes(selectedTag))
        );
        setFilteredPosts(filtered);
    }, [searchTerm, selectedTag]);

    const contextValue: ISearchArticles = {
        searchTerm,
        setSearchTerm,
        selectedTag,
        setSelectedTag,
        filteredPosts,
    };

    return (
        <SearchArticlesContext.Provider value={contextValue}>
            {children}
        </SearchArticlesContext.Provider>
    );
};

export default SearchArticlesProvider