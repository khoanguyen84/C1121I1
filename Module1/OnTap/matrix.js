let size = 6;
let min = 10;
let max = 90;
let matrix = [];
for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(matrix)

let v = 80;
let show = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        show += `${matrix[i][j] % 5 == 0 ? matrix[i][j] : '--'} `;
    }
    show += "\n";
}
console.log(show);
// let arr1 = [];
// let x = 3;
// let y = 3;

// arr1[0] = matrix[x - 2][y - 2];
// arr1[1] = matrix[x - 1][y - 1];
// arr1[2] = matrix[x][y];
// arr1[3] = matrix[x + 1][y + 1];
// arr1[4] = matrix[x + 2][y + 2];

// console.log(arr1)
// let totalOnPrimary = 0;
// for (let i = 0; i < size; i++) {
//     totalOnPrimary += matrix[i][i]
// }
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if(i == j){
//             totalOnPrimary += matrix[i][j]
//         }
//     }
// }