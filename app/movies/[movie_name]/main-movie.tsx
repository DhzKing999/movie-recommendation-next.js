"use client"
import { PlaceHolderImage } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IMovie } from './page'
import { Bookmark, VideoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { addBookMark } from '@/actions/bookMarkAction/book-mark-action'
import { toast } from 'sonner'


const MainMovie = ({ movieData, movieImage }: { movieData: IMovie | null, movieImage: string }) =>
{
    const [isPending, setIsPending] = React.useState(false)
    const handelBookMark = async () =>
    {
        try
        {
            setIsPending(true)
            const data = { ...movieData?.data, imageUrl: movieImage }
            const res = await addBookMark(data)
            toast.success(res.message)
        } catch (error)
        {
            console.log(error)
        } finally
        {
            setIsPending(false)
        }

    }
    console.log(movieImage)
    console.log(movieData)
    return (
        <>
            <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <Image
                    alt="Featured Movie"
                    className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                    height="825"
                    src={movieImage}
                    width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{movieData?.data.original_title}</h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            {movieData?.data.overview}
                        </p>
                    </div>
                    <div className=" flex gap-x-4">
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <a
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href={`https://www.youtube.com/results?search_query=${movieData?.data.original_title}`}
                            >
                                Watch Trailer <VideoIcon className=' ml-2' />
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                                disabled={isPending}
                                onClick={handelBookMark}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            >
                                BookMark <Bookmark className=' ml-2' />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Release Date</div>
                            <div>{movieData?.data.release_date}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Revenue</div>
                            <div>${movieData?.data.revenue}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Runtime</div>
                            <div>{movieData?.data.runtime}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Tagline</div>
                            <div>{movieData?.data.tagline}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Vote Average</div>
                            <div>{movieData?.data.vote_average}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Vote Count</div>
                            <div>{movieData?.data.vote_count}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Cast</div>
                            <div>{(movieData?.data.cast)}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Director</div>
                            <div>{movieData?.data.director}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Budget</div>
                            <div>${movieData?.data.budget}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Genres</div>
                            <div>{movieData?.data.genres}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 dark:text-gray-400">Keywords</div>
                            <div>{movieData?.data.keywords}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default MainMovie