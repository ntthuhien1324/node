console.log("hello world")

const _ = require("lodash");


_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 

// => [['a', 'b', 'c'], ['d']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3))