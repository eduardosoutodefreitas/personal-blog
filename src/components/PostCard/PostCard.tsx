import Image from "next/image"
import { formatDate } from "@/services/formatDate"
import { Post } from "../../../.contentlayer/generated/types"
import PostDetails from "./PostDetails"
import Tag from "@/app/components/Tag"
interface PostCardProps {
    post: Post
}
const PostCard = ({ post }: PostCardProps) => {
    const formatedDate = formatDate(post.date)
    const formatedReadingTime = Math.ceil(post.readingTime.minutes)

    return (
        <article className="min-w-[285px] w-full md:w-[45%] shadow-md rounded-md">
            <div className="w-full h-64 md:h-56 lg:h-48 relative overflow-hidden rounded-t-md">
                <Image alt={`${post.title} post image`} className="scale-110 transition-all rounded-t-md duration-400 hover:scale-100" fill src={post.image} style={{ objectFit: "cover" }} />
            </div>
            <div className="p-3 pb-5">
                {
                    post.tags && (
                        <div className="flex items-center gap-5 w-full mb-3 ">
                            {post.tags.map(tag => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    )
                }
                <h3 className="font-special font-bold">{post.title}</h3>
                <p className="text-darkGray dark:text-secundaryDark mt-1 mb-3 text-sm">{post.description}</p>
                <PostDetails date={formatedDate} readingTime={formatedReadingTime} />
            </div>

        </article>
    )
}

export default PostCard