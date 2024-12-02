
// 1~5 출력
for(let i=1; i<6; i++) {
    console.log(`i --> ${i}`);
}
/*
i --> 1
i --> 2
i --> 3
i --> 4
i --> 5
*/

for( i=1; i<6; i++) {
    console.log(`i --> ${i}`);
}
/*
i --> 1
i --> 2
i --> 3
i --> 4
i --> 5
*/

// for 루프의 인덱스 값으로 var 키워드는 권장하지 않음
let a = [1, 2, 3];
for(let i=0; i<a.length; i++) {
    console.log(`a[${i}] --> ${a[i]}`);
}
/*
a[0] --> 1
a[1] --> 2
a[2] --> 3
*/
console.log('----------');

console.log(`a[${i}] --> ${a[0]}`); // a[6] --> 1
console.log(`a[${i}] --> ${a[1]}`); // a[6] --> 2
console.log(`a[${i}] --> ${a[2]}`); // a[6] --> 3

/** for...of */
for(let element of a) {
    console.log(element);
}
/*
1
2
3
*/

