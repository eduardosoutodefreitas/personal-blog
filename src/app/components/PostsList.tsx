'use client'
import PaginationControls from '@/components/PaginationControls'
import PostCard from '@/components/PostCard/PostCard'
import { SearchArticlesContext } from '@/context/SearchArticles'
import { usePagination } from '@/hooks'
import { useSearchParams } from 'next/navigation'
import { useContext } from 'react'
const PostList = ({ }) => {
    const { filteredPosts, searchTerm } = useContext(SearchArticlesContext);
    const { end, start } = usePagination()
    const posts = searchTerm ? filteredPosts : filteredPosts.slice(start, end);

    return (
        <>
            <section className="my-8 flex items-center justify-between flex-wrap gap-5 md:gap-x-0 md:gap-y-5 min-h-[50vh]">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
                {(posts.length === 0 && searchTerm !== '') && (
                    <div className='self-start'>
                        <p>Nenhum post encontrado.</p>
                    </div>
                )}
            </section>
            {searchTerm === '' && (
                <PaginationControls />
            )}
        </>
    );

}

export default PostList