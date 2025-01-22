import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewComment() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get('/data/reviewcontent.json')
            .then((res) => {
                const rcArray = res.data.products.filter((rc) => (rc.pid === pid))
                setReviewData(rcArray)
            })
            .catch((error) => console.error(error));
    }, []);
    
    return (
        < div className="reviews-list" >
            {
                reviewData.map((review, index) =>
                    <div key={index} className="review-item">
                        <div className="stars">
                            {review.reviews.star}
                        </div>
                        <div className="review-header">
                            <span className="review-user">{review.reviews.user}</span>
                            <span className="review-date">{review.reviews.date}</span>
                        </div>
                        <div className="review-details">
                            <p>구매옵션: {review.reviews.buyOption}</p>
                            <p>사이즈 정보: {review.reviews.sizeInfo}</p>
                        </div>
                        <div className="review-satisfaction">
                            <p>사이즈 만족도: {review.reviews.satisfaction.size}</p>
                            <p>색상 만족도: {review.reviews.satisfaction.color}</p>
                            <p>소재 만족도: {review.reviews.satisfaction.material}</p>
                        </div>
                        <div className="review-comment">
                            <p>{review.reviews.comment}</p>
                        </div>
                        <div className="review-actions">
                            <button type="button">신고</button>
                            <button type="button">숨김</button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

