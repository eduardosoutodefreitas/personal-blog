import { SearchArticlesContext } from "@/context/SearchArticles";
import { useSearchParams, useRouter } from "next/navigation";
import { useContext } from "react";

export const usePagination = () => {
    const { filteredPosts } = useContext(SearchArticlesContext)
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = Number(searchParams.get("page")) || 1;
    const totalPages = Math.ceil(filteredPosts.length / 5);
    const start = (page - 1) * 5;
    const end = start + 5;
  return ({
    router, page, totalPages, searchParams, start, end
  })
}
