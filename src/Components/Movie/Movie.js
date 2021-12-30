const Movie = ({ original_title, vote_average }) => {
    return (
        <div className="Movie">
            { original_title } { vote_average }
        </div>
    );
}
export default Movie;