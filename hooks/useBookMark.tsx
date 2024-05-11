"use client"

import { getAllBookMark } from "@/actions/bookMarkAction/book-mark-action"
import { IUrlParmas } from "@/app/bookmark/[page_no]/page"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

const url = process.env.NEXT_PUBLIC_API_URL

export const useBookMark = (parmas: IUrlParmas) =>
{
    const initialData = getAllBookMark(parmas)
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["book-mark", parmas.pageno],
        queryFn: () => getAllBookMark(parmas),
        initialData: initialData,
    },
    )
    return { data, isLoading, error, refetch }
}
