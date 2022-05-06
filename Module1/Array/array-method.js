let array = [4, 7, 4, 3, 8, 4, 3, 3, 5, 7, 8, 8];

let str = "gdfgdasdsfhfggfhfasd";

console.log(Array.from(str).includes('d'))

// console.log(array.indexOf(17))
// console.log(array.lastIndexOf(7))
// console.log(array.includes(7))

// console.log(array.find(function(value, index){
//     return value > 0
// }));
// console.log(array.findIndex(function(value, index){
//     return value > 7
// }));
// let isGeaterThan3 = array.every(function(value, index){
//     return value >= 3;
// })

// console.log(isGeaterThan3)

// let existGreaterThan3 = array.some(function(value, index){
//     return value > 8;
// })

// console.log(existGreaterThan3)
// let sum = array.reduce(function(total, value, index){
//     return total += value;
// }, 10)
// console.log(sum)
// let n2 = array.map(function(value, index){
//     // return array[index] * 2;
//     return value * 2;
// })

// console.log(n2)

// let filter = array.filter(function(value, index){
//     return value >=5 && value <8;
// })

// console.log(filter);
// for(let index in array){
//     console.log(array[index]);
// }

// for(let value of array){
//     console.log(value)
// }

// array.forEach(function(value, index){
//     console.log(`${index} : ${value}`)
// })

// document.write(array.toString());
// document.write(array.join('<br>'));

// array.sort(function(n1, n2){
//     return -n1 + n2;
// })

// function comparer(n1, n2){
//     return n1 - n2;
// }
// function ascending(n1, n2){
//     return n1 - n2;
// }
// function descending(n1, n2){
//     return n2 - n1;
// }

// array.sort(comparer);

// console.log(array.reverse())

// console.log(array.sort(function(n1, n2){
//     return n1 - n2
// }).reverse());