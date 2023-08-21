'use client'

import { SearchArticlesContext } from "@/context/SearchArticles"
import { useContext } from "react"

const SearchBar = () => {
    const { setSearchTerm, searchTerm } = useContext(SearchArticlesContext)
    return (
        <input placeholder="Pesquisar"
            className="py-2 px-5 w-full rounded-md shadow-md focus:outline-specialBlue placeholder:text-lightGray"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
    )
}

export default SearchBar