import Image from "next/image"
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDate } from "@/services/formatDate"
import { Post } from "../../../.contentlayer/generated/types"
import PostTags from "./PostTags"
import PostDetails from "./PostDetails"
interface PostCardProps {
    post: Post
}
const PostCard = ({ post }: PostCardProps) => {
    const formatedDate = formatDate(post.date)
    return (
        <article className="min-w-[285px] w-full md:w-[45%] shadow-md rounded-md">

            <div className="w-full h-64 md:h-56 lg:h-48 relative overflow-hidden rounded-t-md rounded-l">
                <Image alt={`${post.title} post image`} className="scale-110 transition-all rounded-t-md rounded-l-md duration-400 hover:scale-100" fill src={post.image} style={{ objectFit: "cover" }} />
            </div>
            <div className="p-3 pb-5">
                {
                    post.tags && <PostTags tags={post.tags} />
                }
                <h3 className="font-special font-bold">{post.title}</h3>
                <p className="text-darkGray mt-1 mb-3 text-sm">{post.description}</p>
                <PostDetails date={formatedDate} readingTime={Math.ceil(post.readingTime.minutes)} />
            </div>

        </article>
    )
}

export default PostCard