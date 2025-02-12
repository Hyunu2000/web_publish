import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewImage() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get('/data/reviewcontent.json')
            .then((res) => {
                const iarray = res.data.products.filter((ri) => ri.pid === pid);
                if (iarray.length > 0) {
                    setReviewData(iarray[0].reviewImages.slice(0, 8)); // 처음 8개만 저장
                }
            })
            .catch((error) => console.error(error));
    }, [pid]); // pid가 변경될 때마다 다시 호출하도록 의존성 추가

    return (
        <div className="review-images">
            {reviewData.map((src, index) => (
                <img key={index} src={src} alt={`review-${index}`} />
            ))}
        </div>
    );
}
