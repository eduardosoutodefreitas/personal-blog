import PostCard from '@/components/PostCard/PostCard';
import allPosts from '@/content'
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react'

interface CategoryPageProps {
    params: {
        tag: string
    }
}

function getPostsByTag(tag: string) {
    const posts = allPosts.filter(post => post.tags?.includes(tag));
    return posts;
}

const CategoryPage = ({ params }: CategoryPageProps) => {
    const posts = getPostsByTag(params.tag)
    return (
        <div className='max-w-3xl mx-auto px-12 sm:px-16 lg:px-0'>
            <Link href="/articles?page=1" className='font-medium flex items-center gap-1'><BsArrowLeft /> Voltar à listagem</Link>
            <div className='my-8 flex items-center justify-between flex-wrap gap-5 md:gap-x-0 md:gap-y-5'>
                {posts.map(post => (
                    <PostCard post={post} key={post._id} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage