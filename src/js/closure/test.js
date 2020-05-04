// function test() {
//     var arr = []
//     for (var  i = 0; i < 10; i++) {
//         arr[i] = function () {
//             console.log(i);
//         }
//     }
//     return arr
// }

// var myArr = test();
// for (var j = 0; j < 10; j++) {
//     myArr[j]();
// }
// 10 个 10


//立即执行函数解决 i 从 0 到 9
// function test() {
//     var arr = []
//     for (var i = 0; i < 10; i++) {
//         (function (j) {
//             arr[j] = function () {
//                 console.log(j + " ")
//             }
//         }(i));
//     }
//     return arr;
// }

// let 解决
// var myArr = test();
// for (var j = 0; j < 10; j++) {
//     myArr[j]();
// }

// function test() {
//     var arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = function () {
//             console.log(i);
//         }
//     }
//     return arr
// }

// var myArr = test();
// for (var j = 0; j < 10; j++) {
//     myArr[j]();
// }
