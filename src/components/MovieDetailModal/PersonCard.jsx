import { PersonImage, PersonInfo, CardWrapper } from "./style"


const PersonCard = ({data}) => {
    return (
        <CardWrapper>
            <PersonImage src={`https://image.tmdb.org/t/p/original${data.profile_path}`} alt={data.name}></PersonImage>
            <PersonInfo>{data.name}</PersonInfo>
        </CardWrapper>
    )
}

export default PersonCard;