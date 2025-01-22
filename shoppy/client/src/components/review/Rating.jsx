import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Rating() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get("/data/reviewcontent.json")
            .then((res) => {
                const rarray = res.data.products.filter((r) => r.pid === pid);
                setReviewData(rarray);
            })
            .catch((error) => console.error(error));
    }, [pid]);

    return (
        <div className="review-container">
            <h2>상품 만족도</h2>
            <div className="ratings-grid">
                {/* 평점 데이터 출력 */}
                {reviewData.map((product, index) => (
                    <div key={index} className="rating-item">
                        {/* 사이즈 */}
                        <div className="rating-category">
                            <h4>사이즈</h4>
                            <div>
                                <span>작음 {product.size.small}%</span>
                                <div className="progress-bar">
                                    <div
                                        className="progress small"
                                        style={{ width: `${product.size.small}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div>
                            <span>적당함 {product.size.justRight}%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress medium"
                                    style={{ width: `${product.size.justRight}%` }}
                                ></div>
                            </div>
                            </div>
                            <div>
                            <span>큼 {product.size.large}%</span>
                            <div className="progress-bar">
                                <div
                                    className="progress large"
                                    style={{ width: `${product.size.large}%` }}
                                ></div>
                            </div>
                            </div>
                        </div>
                        {/* 색상 */}
                        <div className="rating-category">
                            <h4>색상</h4>
                            <div>
                                
                            
                            <div className="progress-bar">
                                <div
                                    className="progress match"
                                    style={{ width: `${product.color.same}%` }}
                                ></div>
                            </div>
                                <div
                                    className="progress similar"
                                    style={{ width: `${product.color.similar}%` }}
                                ></div>
                                <div
                                    className="progress different"
                                    style={{ width: `${product.color.different}%` }}
                                ></div>
                            </div>
                            <p>
                                
                                <span>비슷함 {product.color.similar}%</span>
                                <span>다름 {product.color.different}%</span>
                            </p>
                        </div>
                        {/* 소재 */}
                        <div className="rating-category">
                            <h4>소재</h4>
                            <div className="progress-bar">
                                <div
                                    className="progress match"
                                    style={{ width: `${product.material.same}%` }}
                                ></div>
                                <div
                                    className="progress similar"
                                    style={{ width: `${product.material.similar}%` }}
                                ></div>
                                <div
                                    className="progress different"
                                    style={{ width: `${product.material.different}%` }}
                                ></div>
                            </div>
                            <p>
                                <span>같음 {product.material.same}%</span>
                                <span>비슷함 {product.material.similar}%</span>
                                <span>다름 {product.material.different}%</span>
                            </p>
                        </div>
                        {/* 별점 및 평점 */}
                        <div>
                            <span className="stars">{product.star}★</span>
                            <span className="score">{product.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
