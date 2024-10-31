import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { MoviesContainer, ImageWapper } from "./style";

const MovieListBlockSkeleton = () => {
    const getMovieCardElements = () => {
        return Array.from({ length: 20 }, (_, index) => (
            <ImageWapper key={index}>
                <Skeleton height="100%" borderRadius="16px" duration={0.9} highlightColor="#f8f9fa" baseColor="#e9ecef"/>
            </ImageWapper>
        ))
    }

    return (
        <MoviesContainer>
            {getMovieCardElements()}
        </MoviesContainer>
    )
}

export default MovieListBlockSkeleton
