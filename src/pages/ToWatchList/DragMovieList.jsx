import { closestCorners, DndContext } from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

import { MoviesContainer } from "../../components/MovieListBlock/style";
import DragMovieCard from "./DragMovieCard";
import useToWatchListStore from "../../stores/useToWatchListStore"


const DragMovieList = ({ movieList, isCustomSort }) => {
    const sortToWatchList = useToWatchListStore((state) => state.sortToWatchList);

    const handleDragEnd = (e) => {
        const { active, over } = e;
        if (active.id === over.id) return;
        sortToWatchList(arrayMove(movieList, active.data.current.index, over.data.current.index));
    }

    return (
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <MoviesContainer>  
                <SortableContext items={movieList}>
                    {movieList?.length > 0 ? movieList.map((movie, index) => (
                        <DragMovieCard key={movie.id} movie={movie} movieIndex={index} isCustomSort={isCustomSort} />
                    )) : null}
                </SortableContext>
            </MoviesContainer>
        </DndContext>
    )
}

export default DragMovieList;