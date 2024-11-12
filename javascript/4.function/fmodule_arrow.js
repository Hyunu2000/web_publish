// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
// export 키워드를 전역에서 사용할 수 있도록 함
// 화살표 함수 형식으로 전환
// const 함수명 = (파라미터...) => {}
/*
    기본 함수 형식 : 1 ~ 9단 출력
*/
export const gugudan = () => {
    for(let row = 1; row <= 9; row++) {
        let output = '';
        for(let col = 1; col <= 9; col++) {
            output += `${col} X ${row} = ${row * col}\t`
        }
        console.log(output);
    }
}
/*
    구구단 선택 함수 형식 : start ~ end 단 출력
    - 입력되는 start는 0보다 커야 한다.
    - 10단 이상은 출력되지 않도록 한다.
*/
export const selectGugudan = (start, end) => {
    for(let row = 1; row <= 9; row++) {
        let output = '';
        for(let col = start; col <= end; col++) {
            output += `${col} X ${row} = ${row * col}\t`
        }
        console.log(output);
    }
}
/*
    구구단 싱글 함수 형식 : single 단 출력
    - 입력되는 매개변수는 0보다 커야 한다.
*/
export const singleGugudan = (dan) => {
    for(let row = 1; row <= 9; row++) {
        let output = '';
            console.log(`${dan} X ${row} = ${dan * row}\t`);
    }
}

// 프루츠타워를 출력하는 함수 정의
export const fruitsTower = (emoji, floor) => {
    for(let row = 1; row <= floor; row++) {
        let output = '';
        for(let col = 1; col <= row; col++) {
            output += emoji;
        }
        console.log(output);
    }
}

// export {gugudan, selectGugudan, singleGugudan, fruitsTower};
// 정의된 함수들 맨아래에서 export를 사용해도 되지만 일반적으로 함수 이름 앞에 바로 적용한다.