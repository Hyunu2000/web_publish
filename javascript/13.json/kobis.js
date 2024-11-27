import { kobisBoxOffice as boxOffice, 
        searchMoviePoster, 
        kmdbMovieDetail } from "./kobisCommons.js";


initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="Default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="예) 20241122">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>

        <div id="imageModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" class="close">&times;</span> 
                <img id="modalImage" src="" alt="Modal Image"> 
            </div>
        </div>
    `;

    document.querySelector("body").innerHTML = output; // 이벤트는 아웃풋이 실행된 후

    // 기본 박스오피스 화면 출력 : 20240101
    searchBoxOffice('Daily', '20240101');

    /** Search 버튼 이벤트 추가 */
    let searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener('click', () => {
        // searchDt 입력창, 박스오피스 타입의 유효성 체크
        let type = document.querySelector("#type");
        let searchDt = document.querySelector("#searchDt");

        // if를 긍정으로 보고 else를 부정으로 보는 방법도 좋아보인다. if에 원활하게 작동 가능한 경우만
        if (type.value === 'Default') {
            alert('박스오피스 타입을 선택해주세요.');
            type.focus();
        } else if (searchDt.value === '') {
            alert('검색일자를 입력해주세요.');
            searchDt.focus();
        } else if (searchDt.value.length != 8) {
            alert('입력 형식은 기호나 띄어쓰기 없이 숫자 8자리 입니다.')
        }
        else {
            // 일별&주간/주말 박스오피스 정보 화면 출력
            searchBoxOffice(type.value, searchDt.value);
        }

    });


} // end of initForm


/**
 * 일별 박스오피스 정보 화면 출력
 */
function searchBoxOffice(ktype, searchDt) {
    boxOffice(ktype, searchDt) // Promise 객체로 리턴
        .then((result) => {
            const ranktype = ktype.toLowerCase();

            const type = result.boxOfficeResult.boxofficeType;
            const range = result.boxOfficeResult.showRange;
            let rankList = null; // ktype을 체크하여 Daily, Weekly
            let posterList = [];

            if (ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if (ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }

            // 영화 포스터 가져오기 
            rankList.forEach((element) => {
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-', ''); // 요청인자 확인하고 그 양식에 맞게

                posterList.push(getPoster(movieNm, openDt));
            });

            Promise.all(posterList) // 비동기식 처리는 모두 종료가 되도록 실행
                .then((poster) => {

                    let output = `
                            <h5>박스오피스 타입 : ${type}</h5>
                            <h5>박스오피스 일자 : ${range}</h5>
                            <table border=1>
                                <tr>
                                    <th>순위</th>
                                    <th>포스터</th>
                                    <th>제목</th>
                                    <th>개봉일</th>
                                    <th>당일관객수</th>
                                    <th>누적관객수</th>
                                </tr>`;

                    rankList.forEach((element, i) => {
                        output += `
                                    <tr>
                                        <td>${element.rank}</td>
                                        <td><img src=${poster[i]} width="100px" class="poster"
                                            id="${element.movieNm},${element.openDt.replaceAll('-', '')}"></td>
                                        <td>${element.movieNm}</td>
                                        <td>${element.openDt}</td>
                                        <td>${element.audiCnt}</td>
                                        <td>${element.audiAcc}</td>
                                    </tr>
                                `;
                    });

                    output += `</table>`;

                    // 테이블 화면 출력
                    document.querySelector("#result").innerHTML = output;


                    // 이미지 클릭 이벤트
                    const images = document.querySelectorAll(".poster");
                    images.forEach((image) => image.addEventListener('click', onMovieDetail));


                }).catch(); // Promise.all()

            })
            .catch(); //        

};

/** 이미지 이벤트 처리 함수 */
// function onMovieDetail(event) {
//     const modal = document.querySelector('#imageModal');
//     const modalImage = document.querySelector('#modalImage');
//     const closeModalBtn = document.querySelector('#closeModal');



//     let [movieNm, openDt] = event.target.id.split(",");

//     kmdbMovieDetail(movieNm, openDt)
//         .then((result) => {
//             // console.log(result.Data[0].Result[0].title.replaceAll(' !HS ', '').replaceAll(' !HE ', ''));
//             const imageSrc = event.target.src; // 클릭한 이미지의 src를 가져옴
//             modalImage.src = imageSrc; // 모달 창에 이미지 넣기
//             modal.style.display = 'block'; // 모달 창을 표시
            
//         })
//         .catch((error) => console.log(error));

//         // 모달 닫기 버튼 클릭 시 모달 닫기
//         closeModalBtn.addEventListener('click', () => {
//             modal.style.display = 'none'; // 모달 창 닫기
//         });

//         // 모달 바깥쪽 클릭 시 모달 닫기
//         window.addEventListener('click', () => {
//             modal.style.display = 'none'; // 모달 창 닫기
//         });

// } // onMovieDetail








/** 이미지 이벤트 처리 함수 */
function onMovieDetail(event) {
    const modal = document.querySelector('#imageModal');
    const modalImage = document.querySelector('#modalImage');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.querySelector('#closeModal');
    
    let [movieNm, openDt] = event.target.id.split(",");
    
    kmdbMovieDetail(movieNm, openDt)
    .then((result) => {
        const movieInfo = result.Data[0].Result[0];
        const title = movieInfo.title.replaceAll('!HS', '').replaceAll('!HE', '');
        const directors = movieInfo.directors.director.map(d => d.directorNm).join(", ");
        const actors = movieInfo.actors.actor.map(a => a.actorNm).join(", ");
        const plot = movieInfo.plots.plot[0].plotText;
        
        const movieDetailHtml = `
        <h2>${title}</h2>
        <p><strong>감독:</strong> ${directors}</p>
        <p><strong>출연:</strong> ${actors}</p>
        <p><strong>줄거리:</strong> ${plot}</p>
        `;
        
        modalImage.src = event.target.src; // 클릭한 이미지의 src를 가져옴
        modalContent.insertAdjacentHTML('beforeend', movieDetailHtml); // 영화 상세 정보를 추가
        modal.style.display = 'block'; // 모달 창을 표시
    })
    .catch((error) => console.log(error));
    
    // 모달 닫기 버튼 클릭 시 모달 닫기
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // 모달 창 닫기
        modalContent.querySelectorAll('h2, p').forEach(element => element.remove()); // 기존 영화 상세 정보 삭제
    });
    
    // 모달 바깥쪽 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none'; // 모달 창 닫기
            modalContent.querySelectorAll('h2, p').forEach(element => element.remove()); // 기존 영화 상세 정보 삭제
        }
    });
}




/** 순차적으로 비동기식 호출을 위해 getPoster 함수 생성 */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
} // getPoster