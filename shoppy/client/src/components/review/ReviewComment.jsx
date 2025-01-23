import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReviewComment() {
    const [reviewData, setReviewData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const { pid } = useParams();
    const navigate = useNavigate(); // 로그인 페이지로 이동을 위한 네비게이션 훅

    const itemsPerPage = 5;  // 한 페이지에 보여줄 리뷰 수
    const pagesPerGroup = 5; // 페이지 그룹당 최대 페이지 수

    const startPage = (pageGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);

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

    console.log(reviewData);
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 상태 업데이트
    };

    const handleGroupChange = (group) => {
        setPageGroup(group);
        const firstPageOfGroup = (group - 1) * pagesPerGroup + 1;
        setCurrentPage(firstPageOfGroup); // 새로운 그룹의 첫 번째 페이지로 이동
    };

    const inquiry = () => {
        const result = window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?");
        if (result) {
            // 확인 버튼을 누른 경우
            navigate("/login"); // 로그인 페이지로 이동
        }
    };
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
                    <li>추천순 <button onClick={inquiry}>?</button></li>
                </ul>
            </div>

            <div className="reviews-list">
                <table>
                    <colgroup>
                        <col style={{ width: '160px' }} /> {/* 별점 영역 */}
                        <col style={{ width: 'auto' }} /> {/* 리뷰 내용 영역 */}
                    </colgroup>
                    <tbody>
                        {
                            currentItems && currentItems.map((review, index) =>
                                <tr key={index}>
                                    {/* 별점 */}
                                    <td className="review-stars">{review.star}</td>

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
            <ul className="pagination">
                <li>
                    <button
                        type="button"
                        disabled={pageGroup === 1}
                        onClick={() => handleGroupChange(1)}>&lt;&lt;</button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={pageGroup === 1}
                        onClick={() => handleGroupChange(pageGroup - 1)}>&lt;</button>
                </li>
                {[...Array(endPage - startPage + 1)].map((_, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            className={currentPage === startPage + index ? "active" : ""}
                            onClick={() => handlePageChange(startPage + index)}>
                            {startPage + index}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        disabled={endPage === totalPages}
                        onClick={() => handleGroupChange(pageGroup + 1)}>&gt;</button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={endPage === totalPages}
                        onClick={() => handleGroupChange(Math.ceil(totalPages / pagesPerGroup))}>&gt;&gt;</button>
                </li>
            </ul>

        </>
    );
}
