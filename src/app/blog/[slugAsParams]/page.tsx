import Tag from '@/app/components/Tag'
import { Mdx } from '@/components/Mdx'
import PostDetails from '@/components/PostCard/PostDetails'
import allPosts from '@/content'
import { formatDate } from '@/services/formatDate'
import Image from 'next/image'
import { notFound } from 'next/navigation'
interface PostPageProps {
    params: {
        slugAsParams: string
    }
}

async function getPostFromParams(slugAsParams: string) {
    const post = allPosts.find(post => post.slugAsParams === slugAsParams)
    if (!post) {
        notFound()
    }
    return post
}
const PostPage = async ({ params }: PostPageProps) => {
    const post = await getPostFromParams(params.slugAsParams)
    const formatedDate = formatDate(post.date)
    const formatedReadingTime = Math.ceil(post.readingTime.minutes)
    return (
        <div className='max-w-3xl mx-auto my-8 px-8 sm:px-16 lg:px-0'>
            <div>
                <div className='w-full h-[255px] sm:h-[405px] relative mb-3'>
                    <Image src={post.image} className='rounded-md object-cover' fill alt={`post about ${post.title}`} sizes='(max-width:768px) 100vw, 700px' />
                </div>
                {
                    post.tags && (
                        <div className="flex items-center gap-5 w-full mb-3">
                            {post.tags.map(tag => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    )
                }
                <PostDetails date={formatedDate} readingTime={formatedReadingTime} />
            </div>
            <div className='prose mt-5 dark:prose-invert'>
                <Mdx code={post.body.code} />
            </div>
        </div>
    )
}

export default PostPage