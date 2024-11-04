import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { MovieCardWrapper } from "../../components/MovieListBlock/style";
import MovieCard from "../../components/MovieCard";


const DragMovieCard = ({ movie, movieIndex, isCustomSort }) => {
    const {attributes, listeners, transform, transition, setNodeRef, isDragging} = useSortable({
        id: movie.id, 
        disabled: !isCustomSort,
        data: {
            index: movieIndex,
        },
        transition: null,
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 2: 'auto'
    }

    return (
        <MovieCardWrapper 
            ref={setNodeRef} 
            {...attributes} 
            {...listeners}
            style={style}
            id={movie.id}
        >
            <MovieCard 
                movieInfo={movie} 
                isShowTitle
                isShowToWatchBtn={!isCustomSort}
                isEnableOverlay
            />
        </MovieCardWrapper>
    )
}

export default DragMovieCard;