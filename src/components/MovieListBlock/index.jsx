import { MoviesContainer, MovieCardWrapper } from "./style";
import MovieCard from "../MovieCard"

const MovieListBlock = ({movieList}) => {
    return (
        <MoviesContainer>  
          {movieList?.length > 0 ? movieList.map((movie) => (
            <MovieCardWrapper key={movie.id} >
              <MovieCard 
                movieInfo={movie} 
                isShowTitle
                isShowToWatchBtn
                isEnableOverlay
              />
            </MovieCardWrapper>
          )) : null}
        </MoviesContainer>
    )
}

export default MovieListBlock;