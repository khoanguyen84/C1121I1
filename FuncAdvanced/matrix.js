function createMatrix(size, min, max) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    return matrix;
}

function calcEvenNumberInMatrix(matrix) {
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] % 2 == 0) {
                total += matrix[i][j]
            }
        }
    }
    return total;
}

function calcPrimaryInMatrix(matrix) {
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        total += matrix[i][i]
    }   
    return total;
}

(function ready() {
    let matrix = createMatrix(10, 10, 90);
    console.log(matrix);
    console.log("Total of even in matrix: ",calcEvenNumberInMatrix(matrix));
    console.log("Total of values in primary of matrix: ", calcPrimaryInMatrix(matrix))
})();

// let matrix = createMatrix(10, 10, 90);
// let total = calcEvenNumberInMatrix(matrix);
// console.log(total)
// console.log(calcEvenNumberInMatrix(createMatrix(10,10,90)));