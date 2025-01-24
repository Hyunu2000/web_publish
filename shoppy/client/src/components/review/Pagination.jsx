import React from 'react';

export default function Pagination({ currentPage, totalPages, pageGroup, setPageGroup, setCurrentPage, pagesPerGroup }) {
    
    const startPage = (pageGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 상태 업데이트
    };

    const handleGroupChange = (group) => {
        setPageGroup(group);
        const firstPageOfGroup = (group - 1) * pagesPerGroup + 1;
        setCurrentPage(firstPageOfGroup); // 새로운 그룹의 첫 번째 페이지로 이동
    };



    return (
        <ul className="pagination">
            <li>
                <button
                    type="button"
                    disabled={pageGroup === 1}
                    onClick={() => handleGroupChange(1)}>&lt;&lt;</button> {/* << 버튼 */}
            </li>
            <li>
                <button
                    type="button"
                    disabled={pageGroup === 1}
                    onClick={() => handleGroupChange(pageGroup - 1)}>&lt;</button> {/* < 버튼 */}
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
                    onClick={() => handleGroupChange(pageGroup + 1)}>&gt;</button> {/* > 버튼 */}
            </li>
            <li>
                <button
                    type="button"
                    disabled={endPage === totalPages}
                    onClick={() => handleGroupChange(Math.ceil(totalPages / pagesPerGroup))}>&gt;&gt;</button> {/* >> 버튼 */}
            </li>
        </ul>
    );
}

