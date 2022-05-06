function createArray(arrLength, min = 1, max = 10) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}
// console.log(createArray(10));
// console.log(createArray(10,10,50));


function swap(n1, n2){
    let temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(`${n1} - ${n2}`);
}

let n1 = 5;
let n2 = 7;
console.log(`${n1} - ${n2}`); //5 - 7
swap(n1, n2); // 5 - 7 | 7 - 5
console.log(`${n1} - ${n2}`); //5 - 7