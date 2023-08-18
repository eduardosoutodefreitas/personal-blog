interface TagsProps {
    tags:string[]
}

const PostTags = ({tags}: TagsProps) => {
  return (
        <div className="flex items-center gap-5 w-full mb-3 ">
            {tags.map(tag => (

                <div key={tag} className="bg-specialBlue px-3 py-1 text-white rounded-md capitalize">
                    {tag}
                </div>

            ))}
        </div>
  )
}

export default PostTags