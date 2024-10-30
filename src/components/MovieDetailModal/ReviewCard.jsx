import dayjs from "dayjs";

import { ReviewCardWrapper, ReviewCardHeader, ReviewCardContent, ReviewText, CreateTime, AuthorInfo } from "./style";


const ReviewCard = ({ data }) => {
    return (
        <ReviewCardWrapper>
            <ReviewCardHeader>
                <AuthorInfo>
                    <ion-icon name="chatbubble-ellipses" size="large"></ion-icon>
                    <div>{data.author}</div>
                </AuthorInfo>
                <CreateTime>{dayjs(data.created_at).format('YYYY/MM/DD')}</CreateTime>
            </ReviewCardHeader>
            <ReviewCardContent>
                <ReviewText>{data.content}</ReviewText>
                <div>
                    <a href={data.url} target="_blank">See More...</a>
                </div>
            </ReviewCardContent>
        </ReviewCardWrapper>
    )
}

export default ReviewCard;