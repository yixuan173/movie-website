import { PageTitle } from "./style";
import MovieListBlock from "../../components/MovieListBlock"
import resetToWatchList from "../../stores/useToWatchListStore";

const ToWatchList = () => {
  const toWatchList = resetToWatchList((state) => state.toWatchList);

  return (
    <div>
      <div>
        <PageTitle> 為我推薦 </PageTitle>

      </div>
      <div>
        <PageTitle> 我的收藏 </PageTitle>
        <MovieListBlock movieList={toWatchList} />
      </div>
    </div>
  );
}

export default ToWatchList;
