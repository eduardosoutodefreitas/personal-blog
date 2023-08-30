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
        <div className='max-w-3xl mx-auto px-8 sm:px-16 lg:px-0 my-8'>
            <Link href="/articles?page=1" className='font-semibold flex items-center gap-2 group text-lg'><BsArrowLeft size={18} className="group-hover:-translate-x-1 transition-all duration-150" /> Voltar à listagem</Link>
            <h3 className='mt-12 mb-3'>Postagens da categoria <span className="text-specialBlue text-special font-semibold">{params.tag}</span></h3>
            <div className='flex items-center justify-between flex-wrap gap-5 md:gap-x-0 md:gap-y-5'>
                {posts.map(post => (
                    <PostCard post={post} key={post._id} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage