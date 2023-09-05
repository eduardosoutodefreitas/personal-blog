import Image from "next/image"
import { formatDate } from "@/services/formatDate"
import { Post } from "../../../.contentlayer/generated/types"
import PostDetails from "./PostDetails"
import Tag from "@/app/components/Tag"
import Link from "next/link"
interface PostCardProps {
    post: Post
}
const PostCard = ({ post }: PostCardProps) => {
    const formatedDate = formatDate(post.date)
    const formatedReadingTime = Math.ceil(post.readingTime.minutes)

    return (
        <article className="min-w-[285px] w-full md:w-[45%] shadow-md rounded-md h-[388px]">
            <div className="w-full h-64 md:h-56 lg:h-48 relative overflow-hidden rounded-t-md">
                <Link href={`blog/${post.slugAsParams}`}>
                    <Image alt={`${post.title} post image`} className="scale-110 transition-all rounded-t-md duration-400 hover:scale-100" fill src={post.image} style={{ objectFit: "cover" }} />
                </Link>
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
                <PostDetails date={formatedDate} readingTime={formatedReadingTime} />
                <Link href={`blog/${post.slugAsParams}`}>
                    <h3 className="font-semibold mt-3">{post.title}</h3>
                </Link>
                <p className="text-darkGray dark:text-secundaryDark mt-1 text-xs">{post.description}</p>
            </div>

        </article>
    )
}

export default PostCard