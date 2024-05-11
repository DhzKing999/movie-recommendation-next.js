"use client"
import { useBookMark } from '@/hooks/useBookMark'
import React, { useEffect, useState } from 'react'
import BookmarkedMovies from '../components/book-marked-movies'
import { PagePagination } from '../components/pagination'
import { useSearchParams } from 'next/navigation'

export interface IUrlParmas
{
    pageno: number
    revenue: string | null
    sort: string | null
    startDate: string | null
    endDate: string | null
}

const BookMarkPage = ({ params }: { params: { page_no: number } }) =>
{
    const [urlParams, setUrlParams] = useState<IUrlParmas>({
        pageno: params.page_no,
        revenue: '',
        sort: '',
        startDate: '',
        endDate: '',
    })
    const searchParams = useSearchParams()
    useEffect(() =>
    {
        const revenue = searchParams.get('revenue') || ''
        const startDate = searchParams.get('startDate') || ''
        const endDate = searchParams.get('endDate') || ''
        const sort = searchParams.get('sort') || ''
        setUrlParams((prevParams) => ({
            ...prevParams,
            revenue,
            startDate,
            endDate,
            sort,
        }))
    }, [searchParams])

    const { data, error, refetch } = useBookMark(urlParams)

    useEffect(() =>
    {
        refetch()
    }, [urlParams])

    console.log(data)

    return (
        <>
            <BookmarkedMovies bookMarkData={data?.data?.allTodo} />
            <PagePagination count={data?.data?.count} />
        </>
    )
}

export default BookMarkPage
