import React from 'react';
import MovieCard from './movie-card';
import { IMovie } from '../../movies/[movie_name]/page';


const BookmarkedMovies = ({ bookMarkData }: { bookMarkData: IMovie[] }) =>
{
    return (
        <main className="  ml-auto max-w-[83vw]  min-h-[80vh]  flex md:flex-col items-center  justify-center   px-4 pt-20 md:px-6 lg:px-8">
            <div className="   grid  w-full  min-h-[80vh] grid-cols-1 gap-8 justify-start   sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-12">
                {bookMarkData?.map((movie, index) => (
                    <MovieCard key={index} data={movie} />
                ))}
            </div>
        </main>
    );
};

export default BookmarkedMovies;