import { PersonImage, PersonInfo, CardWrapper } from "./style"
import { TMDB_IMG_URL } from "../../constants/api.constant";

const PersonCard = ({data}) => {
    return (
        <CardWrapper>
            <PersonImage src={`${TMDB_IMG_URL}${data.profile_path}`} alt={data.name}></PersonImage>
            <PersonInfo>{data.name}</PersonInfo>
        </CardWrapper>
    )
}

export default PersonCard;