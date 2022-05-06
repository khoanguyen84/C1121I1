function Student(fn, age) {
    this.fullName = fn;
    this.age = age;

    this.showInfo = function(){
        return `Fullname: ${this.fullName}, age: ${this.age}`;
    }
}

// Student.prototype.showInfo = function () {
//     return `Fullname: ${this.fullName}, age: ${this.age}`;
// }

let khoa = new Student("Khoa", 18);
let tung = {...khoa};
console.log(tung)
// console.log(khoa.showInfo())
// khoa.showInfo()


// console.log(sum());

// // Declaretion function
// function sum(){
//     return 12;
// }


// Expression function
// let total = function () {
//     return 13;
// }
// console.log(total())

// let array2 = [1, 2, [3, 4, 5], [6, 7], 8];

// Array.prototype.flat = function(){
//     let arr = [];
//     for(let item of array2){
//         let tmp = arr.concat(item);
//         arr = [...tmp];
//     }
//     return arr;
// }

// console.log(array2.flat());
// let a = [1,2];
// // let b = [1,2];
// let b = [...a];
// console.log(a === b)