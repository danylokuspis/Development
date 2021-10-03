import moviesData from '../../movies_response_sample.json'
import Movie from '../Movie';

const Movies = () => {
    return (
        <div>
            {moviesData.results.map((movieData) => {
                return <Movie{...movieData} />
            })}
        </div>
    );
}

export default Movies;