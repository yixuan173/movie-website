import { useEffect, useState } from 'react';

import { SliderContainer, LotteryCardWapper, SliderTrack, LotteryButton, LotteryWrapper } from "../style";
import MovieCard from "../../../components/MovieCard";


const Lottery = ({ movieList }) => {
    const [isSliding, setIsSliding] = useState(false);
    const [stopIndex, setStopIndex] = useState(null);

    useEffect(() => {
        setStopIndex(null);
    }, [ movieList ])
  
    const startSliding = () => {
      setIsSliding(true);
      setStopIndex(null);

      setTimeout(() => {
        setIsSliding(false);
        const randomIndex = Math.floor(Math.random() * movieList.length);
        setStopIndex(randomIndex);
      }, 3000);
    };

    return (
        <LotteryWrapper>
            <SliderContainer>  
                <SliderTrack
                    $isSliding={isSliding}
                    $length={movieList.length}
                    $stopIndex={stopIndex}
                >
                    {movieList?.length > 0 ? [...movieList, ...movieList].map((movie, index) => (
                        <LotteryCardWapper key={`${movie.id}${index}`} $isSelected={stopIndex === index} >
                            <MovieCard movieInfo={movie} />
                        </LotteryCardWapper>
                    )) : null}
                </SliderTrack>
            </SliderContainer>
            <LotteryButton disabled={isSliding} onClick={startSliding}>隨機推薦</LotteryButton>
        </LotteryWrapper>
    )
}

export default Lottery;