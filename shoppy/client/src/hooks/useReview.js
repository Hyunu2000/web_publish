import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useReview(pid) {
    const [reviewList, setReviewList] = useState([]);
    const [reviewCount, setReviewCount] = useState(0);
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios
            .get("/data/reviewcontent.json")
            .then((res) => {
                const reviewsArray = res.data.products.filter((r) => r.pid === pid)
                setReviewList(reviewsArray[0].reviews)
                setReviewCount(reviewsArray[0].reviews.length)
                setReview(reviewsArray[0])
            })
            .catch((error) => console.log(error))
    }, [pid])    

    return ({ reviewList, reviewCount, review });
}

