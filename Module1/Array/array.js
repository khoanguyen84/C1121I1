let min = 10;
let max = 90;
let size = 10;
let x = 15;
let isFound = false;
let arr = [];
let arr2 = [];
let total = 0;

for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(arr);
for (let i = 0; i < size; i++) {
    console.log(arr[i]);
}
for (let i = 0; i < size; i++) {
    total += arr[i];
}
console.log(total)
for (let i = 0; i < size; i++) {
    arr2[i] = arr[i] * 2;
}
console.log(arr2);
for (let i = 0; i < size; i++) {
    if (arr[i] == x) {
        isFound = true;
        break;
    }
}

console.log(`${x} ${isFound ? 'existed' : 'not existed'} in array`);

// console.log(Math.floor(Math.random() * (max - min + 1) + min))
// console.log(Math.floor(Math.random() * (81) + 10))