
const _ = require("lodash");

var arr = ['a','b','c','d'];

console.log(_.chunk(arr, 3))

console.log(arr[3])
console.log(arr.length)
arr.push("e")
console.log(arr.length)

function hello() {
    console.log("hello world");
}

function callFunc(fn) {
    fn()
}

callFunc(hello)

var str = function(){
    console.log("Hello world!")
}

str();