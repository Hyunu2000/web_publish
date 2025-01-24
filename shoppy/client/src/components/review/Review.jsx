import React from "react";
import Rating from "./Rating.jsx";
import ReviewImage from "./ReviewImage.jsx";
import ReviewComment from "./ReviewComment.jsx";

export default function Review({reviewList, reviewCount, review}) {

    return (
        <>
            <Rating reviewCount={reviewCount}/>
            <ReviewImage review={review} />
            <ReviewComment  reviewList={reviewList}/>
        </>
    );
}
