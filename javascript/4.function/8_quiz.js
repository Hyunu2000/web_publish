import {singleGugudan, selectGugudan, gugudan, fruitsTower} from './fmodule_arrow.js'; // .js 확장자는 붙이는게 좋다

singleGugudan(3);   // 3단 출력
selectGugudan(7, 9);    // 7 ~ 9단 출력
gugudan();  // 전체(1 ~ 9)출력

fruitsTower('🍎', 5);
fruitsTower('🍋', 10);

