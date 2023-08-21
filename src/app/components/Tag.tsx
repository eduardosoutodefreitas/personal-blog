import React from 'react'
interface TagProps {
    tag: string
}
const Tag = ({ tag }: TagProps) => {
    return (
        <div key={tag} className="bg-specialBlue px-3 py-1 text-xs text-white rounded-md capitalize">
            {tag}
        </div>
    )
}

export default Tag