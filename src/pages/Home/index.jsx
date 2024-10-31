import { useEffect } from "react";

import { PageTitle } from "./style"
import useMovieListStore from "../../stores/useMovieListStore"
import MovieListBlock from "../../components/MovieListBlock"


const Home = () => {
  const movieList = useMovieListStore((state) => state.movieList)
  const getMovieList = useMovieListStore((state) => state.getMovieList)

  useEffect(() => {
    if (movieList.length > 0) return;
    getMovieList();
  }, []);

  return (
    <div>
      <PageTitle> 熱門電影 </PageTitle>
      <MovieListBlock movieList={movieList} />
    </div>
  );
};

export default Home;
