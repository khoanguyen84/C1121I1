let chars = ["A", "B", "C", "D", "E", "F"];
let len = chars.length - 1;
let min = 0;
let index = Math.floor(Math.random()*(len - min + 1) + min);
console.log(chars[index])