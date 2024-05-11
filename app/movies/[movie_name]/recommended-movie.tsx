import { PlaceHolderImage } from '@/public/images';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Movie
{
    title: String;
}

const MovieCard = async ({ title }: Movie) => 
{
    const { data: imageData } = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?title=${title}&token=e7a9efa9-2cd6-46e0-89f0-5026fd325f99`)
    return (
        <Link href={`/movies/${title}`}>
            <div className="flex flex-col items-start space-y-2  rounded-xl">
                <div className="max-w-[300px] max-h-[300px]  rounded-xl overflow-hidden">
                    <Image
                        alt="Movie Poster"
                        className=" hover:scale-110 transition duration-500 cursor-pointer object-coveraspect-[2/3]   overflow-hidden rounded-xl object-cover"
                        height="550"
                        src={imageData?.data?.movies[0]?.urlPoster}
                        width="400"
                    />
                </div>
                <div className="space-y-1">
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>
            </div>
        </Link>
    )
}

const RecommendedMovies = ({ recommentedData }: { recommentedData: String[] | null }) => 
{
    return (
        <section className="w-full py-12 md:py-24 lg:py-32  ">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recommended Movies</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Check out these other great movies you might enjoy.
                        </p>
                    </div>
                </div>
                <div className="   grid  w-full grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-12">
                    {recommentedData?.map((movie, index) => (
                        <MovieCard key={index} title={movie} />
                    ))}
                </div>
            </div>
        </section>
    )

}




export default RecommendedMovies;
