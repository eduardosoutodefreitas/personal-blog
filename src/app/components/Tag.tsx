import Link from 'next/link'
import React from 'react'
interface TagProps {
    tag: string
}
const Tag = ({ tag }: TagProps) => {
    return (
        <Link href={`/blog/category/${tag}`} key={tag} className="bg-specialBlue px-3 py-1 text-xs text-white rounded-md capitalize">
            {tag}
        </Link>
    )
}

export default Tag