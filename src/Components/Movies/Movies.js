/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Movie from '../Movie/Movie';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const Movies = () => {
    const [moviesData, setMoviesData] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);
        
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=307392ba2a29d64bea74f7beb9053e71')
            .then(res=> {
                return res.json();
            })
            .then((jsonData) => { 
                setIsLoading(false);
                setMoviesData(jsonData.results);
            })
    }, []);

    return (
        <div>
            {isLoading && <CircularProgress 
                css={css`
                    margin-top: 48px;
                `}
             />
            }
            {moviesData && moviesData.map((movieData) => {
                console.log(movieData);
                return <Movie{...movieData} key={movieData.id} />;
            })}
        </div>
    );
}

export default Movies;