import { Mdx } from '@/components/Mdx'
import allPosts from '@/content'
import { notFound } from 'next/navigation'
interface PostPageProps {
    params: {
        slug: string
    }
}

async function getPostFromParams(slug: string) {
    const post = allPosts.find(post => post.slugAsParams === slug)
    if (!post) {
        notFound()
    }
    return post
}
const PostPage = async ({ params }: PostPageProps) => {
    const post = await getPostFromParams(params.slug)
    return (
        <div className='container mx-auto prose'>
            <Mdx code={post.body.code} />
        </div>
    )
}

export default PostPage