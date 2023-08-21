'use client'
import PostCard from '@/components/PostCard/PostCard'
import allPosts from '@/content'
import { SearchArticlesContext } from '@/context/SearchArticles'
import { useContext } from 'react'
const PostList = () => {
    const { filteredPosts, searchTerm } = useContext(SearchArticlesContext)
    return (
        <section className="mt-5 flex items-center justify-between flex-wrap gap-5 md:gap-x-0 md:gap-y-5">
            {filteredPosts.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
            {filteredPosts.length === 0 && searchTerm.length !== 0 && (
                <div className="mb-64">
                    <p>Nenhum post encontrado.</p>
                </div>
            )}
        </section>
    )
}

export default PostList