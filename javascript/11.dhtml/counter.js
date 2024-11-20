// counter 증가/감소
function counter(flag) {
    let number = document.querySelector("#number").textContent;
    if(flag === 'increment') {
        document.querySelector("#number").textContent = ++number;
    } else {
        if(number > 0)
            document.querySelector("#number").textContent = --number;
    }
}

// counter 증가
function increment() {
    // ++document.querySelector("#number").textContent
    let number = document.querySelector("#number").textContent;
    if(number < 10) {
    document.querySelector("#number").textContent = ++number;
    } else {
        alert('최대 10까지만 입력 가능합니다.');
    }
}

// counter 감소
function decrement() {
    // --document.querySelector("#number").textContent
    let number = document.querySelector("#number").textContent;
    if(number > 0) {
        document.querySelector("#number").textContent = --number;
    } else {
        alert('0보다 작을 수 없습니다.');
    }
}