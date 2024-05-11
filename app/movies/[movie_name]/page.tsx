import axios from 'axios'
import React from 'react'
import MainMovie from './main-movie';
import RecommendedMovies from './recommended-movie';

export interface IMovie
{
    data: {
        index: number;
        budget: number;
        genres: string;
        homepage: string;
        id: number;
        keywords: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        release_date: string;
        revenue: number;
        runtime: number;
        status: string;
        tagline: string;
        vote_average: number;
        vote_count: number;
        cast: string;
        director: string;
    }
}
const MoviePage = async ({ params }: { params: { movie_name: string } }) =>
{
    const url = process.env.NEXT_PUBLIC_PYTHON_SERVER_URL
    const decodedPath = decodeURI(params.movie_name);
    let movieImage = null || 'https://m.media-amazon.com/images/M/MV5BMTViNTY2MjMtYmUwOC00ZGYxLThjOWEtYjNjZWU3MTYwYzZmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg'
    let movieData: IMovie | null = {
        data: {
            index: 0,
            budget: 237000000,
            genres: 'Action Adventure Fantasy Science Fiction',
            homepage: 'http://www.avatarmovie.com/',
            id: 19995,
            keywords: 'culture clash future space war space colony society',
            original_language: 'en',
            original_title: 'Avatar',
            overview:
                'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
            popularity: 150.437577,
            release_date: '2009-12-10',
            revenue: 2787965087,
            runtime: 162,
            status: 'Released',
            tagline: 'Enter the World of Pandora.',
            vote_average: 7.2,
            vote_count: 11800,
            cast:
                'Sam Worthington Zoe Saldana Sigourney Weaver Stephen Lang Michelle Rodriguez',
            director: 'James Cameron'
        }
    };
    let recommentedData = null;
    try
    {
        const { data: mData } = await axios.get<IMovie>(`${url}/${decodedPath}`)
        const { data: rData } = await axios.get(`${url}/predict/${decodedPath}`)
        const { data: imageData } = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?title=${decodedPath}&token=e7a9efa9-2cd6-46e0-89f0-5026fd325f99`)
        movieData = mData
        recommentedData = rData.Movies
        movieImage = (imageData?.data?.movies[0]?.urlPoster)
    } catch (error)
    {
        console.log(error)
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <MainMovie movieImage={movieImage} movieData={movieData} />
            <RecommendedMovies recommentedData={recommentedData} />
        </section>
    )
}

export default MoviePage