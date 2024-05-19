import React from 'react';
import { useQuery } from 'react-query';
import { getPopularMovies } from '../api/movies-api';

const PopularMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('popular', getPopularMovies);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const popularMovies = data;

    return (
        <div>
            <h2>Popular Movies</h2>
            <div>
                {popularMovies.map(movie => (
                    <div key={movie.id}>
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMoviesPage;
