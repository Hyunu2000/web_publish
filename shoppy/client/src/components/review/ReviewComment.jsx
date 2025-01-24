import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

export default function ReviewComment() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    // 페이지 정보 관련
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;  // 한 페이지에 보여줄 리뷰 수
    const pagesPerGroup = 5; // 페이지 그룹당 최대 페이지 수
    const [pageGroup, setPageGroup] = useState(1);

    useEffect(() => {
        axios
            .get('/data/reviewcontent.json')
            .then((res) => {
                const rcArray = res.data.products.filter((reviewComment) => reviewComment.pid === pid);
                const totalReviews = rcArray[0].reviews.length;
                setTotalPages(Math.ceil(totalReviews / itemsPerPage)); // 전체 페이지 수 계산
                setReviewData(rcArray[0].reviews); // 현재 페이지에 해당하는 리뷰 데이터만 가져옴
            })
            .catch((error) => console.error(error));
    }, [pid, currentPage]); // `pid`와 `currentPage`가 변경될 때마다 다시 데이터 로딩


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reviewData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="comment-menu">
                <ul>
                    <li>최신순</li>
                    <li>평점 높은순</li>
                    <li>평점 낮은순</li>
                    <li>추천순 <button>?</button></li>
                </ul>
            </div>

            <div className="reviews-list">
                <table>
                    <tbody>
                        {
                            currentItems && currentItems.map((review, index) =>
                                <tr key={index} >
                                    {/* 별점 */}
                                    <td className="review-stars">
                                        <div>
                                            {review.star}

                                        </div>

                                    </td>

                                    {/* 리뷰 내용 */}
                                    <td>
                                        <div className="review-details">
                                            <div className="review-info-container">
                                                <span className="review-buy-option">구매옵션: {review.buyOption}</span>
                                                <div className="review-user-info">
                                                    <span className="review-user">{review.user}</span>
                                                    <span className="review-date">{review.date}</span>
                                                </div>
                                            </div>
                                            <span className="review-size-info">사이즈 정보: {review.sizeInfo}</span>
                                        </div>

                                        <div className="review-satisfaction">
                                            <ul>
                                                <li>사이즈 {review.satisfaction.size}</li>
                                                <li>색상 {review.satisfaction.color}</li>
                                                <li>소재 {review.satisfaction.material}</li>
                                            </ul>
                                        </div>

                                        <div className="review-comment-image">
                                            {review.reviewImages && review.reviewImages.length > 0 ? (
                                                review.reviewImages.map((image, idx) => (
                                                    <img key={idx} src={image} alt={`Review Image ${idx + 1}`} />
                                                ))
                                            ) : null}
                                        </div>

                                        <div className="review-comment">
                                            <p>{review.comment}</p>
                                        </div>

                                        <div className="review-actions">
                                            <div>
                                                <button type="button"><span>신고</span></button>
                                                <button type="button"><span>숨김</span></button>
                                            </div>
                                            <div>
                                                <button type="button">👍</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* 페이지 네비게이션 */}
            <Pagination currentPage={currentPage} totalPages={totalPages} pageGroup={pageGroup} setPageGroup={setPageGroup} setCurrentPage={setCurrentPage} pagesPerGroup={pagesPerGroup} />
        </>
    );
}
