// let khoa = {
//     fullname : "Khoa",
//     age : 18,
//     gender : true,
//     info(){
//         return `My name is ${this.gender ? 'Mr' : 'Ms'} ${this.fullname}, I am ${this.age} years old`
//     }
// }

// let tung = {
//     fullname : "Tùng",
//     age : 20,
//     gender : true,
//     info(){
//         return `My name is ${this.gender ? 'Mr' : 'Ms'} ${this.fullname}, I am ${this.age} years old`
//     }
// }

function Person(fn, age, gender){
    this.fullname = fn;
    this.age = age;
    this.gender = gender;
    this.info = function(){
        return `My name is ${this.gender ? 'Mr' : 'Ms'} ${this.fullname}, I am ${this.age} years old`
    }
}

let khoa = new Person("Khoa", 18, true);
let tung = new Person("Tùng", 20, true);

console.log(khoa.info())
console.log(tung.info())
// console.log(tung.info())


// Declaretion Function
function sum(){

}

//Expression Function
let func = function(){

}

//Anonymous Funtion

let arr = [];
arr.sort(function(value, index){

})

//Define Class
function Student(){

    // define method
    this.info = function(){

    }
}