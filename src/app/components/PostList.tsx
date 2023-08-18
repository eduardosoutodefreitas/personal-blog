import PostCard from '@/components/PostCard/PostCard'
import allPosts from '@/content'
const PostList = async () => {
    return (
        <section className="mt-5">
            <h2 className="font-special font-bold text-lg mb-3">Últimos posts</h2>
            <div className="flex items-center justify-between flex-wrap gap-5 md:gap-x-0 md:gap-y-5">
                {allPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </section>
    )
}

export default PostList