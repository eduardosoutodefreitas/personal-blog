import { useSearchParams, useRouter } from "next/navigation";

export const usePagination = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = Number(searchParams.get("page")) || 1;
    const start = (page - 1) * 5;
    const end = start + 5;
  return ({
    router, page, searchParams, start, end
  })
}
