const url = require('url');

const { URL } = url; // 구조 분해 할당
const myUrl = new URL('https://www.google.com/search?q=%EA%B9%83%ED%97%88%EB%B8%8C&oq=&gs_lcrp=EgZjaHJvbWUqCQgDECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxMzAwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8');

// console.log('url ==>>', url);
console.log('URL ==>>', URL);
console.log('myUrl', myUrl);
console.log('url.format()', url.format(myUrl));
