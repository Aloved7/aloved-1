// import Two from './two';
// import '@babel/polyfill'
// const test = (num) => {
//     console.log("test函数哈哈" + num);
// }
// test(Two.y);

const delay = new Promise(resolve => console.log("new Promise()"));
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

