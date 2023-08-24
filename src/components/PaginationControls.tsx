"use client"

import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { usePagination } from "@/hooks"
interface PaginationControlsProps {
    postsQuantity: number
}
const PaginationControls = ({ postsQuantity }: PaginationControlsProps) => {
    const { page, router } = usePagination()
    const totalPages = Math.ceil(postsQuantity / 5);
    return (
        <div className="flex justify-between items-center">
            <div>
                {page} de {totalPages}
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 rounded-md bg-specialBlue disabled:bg-specialBlue/50 disabled:text-white/50 text-white grid place-items-center"
                    disabled={page === 1}
                    onClick={() => {
                        router.push(`/articles/?page=${Number(page) - 1}`)
                    }}>
                    <BsCaretLeftFill />
                </button>
                <button className="p-2 rounded-md bg-specialBlue disabled:bg-specialBlue/50 disabled:text-white/50 text-white grid place-items-center"
                    disabled={page === totalPages}
                    onClick={() => {
                        router.push(`articles/?page=${Number(page) + 1}`)
                    }}>
                    <BsCaretRightFill />
                </button>
            </div>
        </div>
    )
}

export default PaginationControls