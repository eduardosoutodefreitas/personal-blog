import PostList from "../components/PostsList"
import SearchBar from "../components/SearchBar"

const ArticlesPage = () => {
    return (
        <div className="max-w-3xl mx-auto my-8 px-12 sm:px-16 lg:px-0">
            <SearchBar />
            <PostList />
        </div>
    )
}

export default ArticlesPage