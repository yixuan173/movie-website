import React from "react";
import { PersonImage, PersonInfo, PersonCardWrapper } from "./style"


const PersonCard = ({data}) => {
    return (
        <PersonCardWrapper>
            <PersonImage src={`https://image.tmdb.org/t/p/original${data.profile_path}`} alt={data.name}></PersonImage>
            <PersonInfo>{data.name}</PersonInfo>
        </PersonCardWrapper>
    )
}

export default PersonCard;