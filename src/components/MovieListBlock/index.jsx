import { MoviesContainer } from "./style";
import MovieCard from "../MovieCard"

const MovieListBlock = ({movieList}) => {
    return (
        <MoviesContainer>  
          {movieList?.length > 0 ? movieList.map((movie) => (
             <MovieCard 
                key={movie.id} 
                movieInfo={movie} 
                isShowTitle
                isShowToWatchBtn
              />
          )) : null}
        </MoviesContainer>
    )
}

export default MovieListBlock;