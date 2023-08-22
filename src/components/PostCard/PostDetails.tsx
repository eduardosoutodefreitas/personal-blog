import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineCalendarMonth } from 'react-icons/md'

interface PostDetailsProps {
    date: string
    readingTime: number
}

const PostDetails = ({ date, readingTime }: PostDetailsProps) => {
    return (
        <div className="flex justify-between items-center text-xs text-darkGray dark:text-secundaryDark">
            <div className="flex items-center gap-1">
                <MdOutlineCalendarMonth size={16} className="text-specialBlue" />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
                <AiOutlineClockCircle size={16} className="text-specialBlue" />
                <span>{readingTime} minutos de leitura</span>
            </div>
        </div>
    )
}

export default PostDetails