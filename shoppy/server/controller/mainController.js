/**  */
export const getMain = (req, res) => {
    res.send('Hello~ Main~'); // 여러 내용을 send 하고 싶다면 객체나 문자열로 만들어 한 번에 보내야 함
    // res.send('Hello2~ Main~'); send()함수는 한 번만 전송 가능!
    res.end();
}