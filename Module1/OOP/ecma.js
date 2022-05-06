class Person {
    constructor(fn, age, gender) {
        this.fullname = fn;
        this.age = age;
        this.gender = gender;
    }
    info() {
        return `My name is ${this.gender ? 'Mr' : 'Ms'} ${this.fullname}, I am ${this.age} years old`;
    }

    static slogen() {
        return `Still breath still alive`;
    }
}

class Student extends Person {
    constructor(fn, age, gender, email) {
        super(fn, age, gender);
        this.email = email;
    }
    // introduction(){
    //     return `My name is ${this.gender ? 'Mr' : 'Ms'} ${this.fullname}, I am ${this.age} years old, my email is ${this.email}`;
    // }
    info() {
        return `${super.info()}, my email is ${this.email}`;
        // return `Still breath still alive`;
    }
}

let khoa = new Person("Khoa", 18, true);
let tung = new Student("Tùng", 20, true, "tung@gmail.com");
// console.log(khoa.info())
// console.log(tung.info())
console.log(Student.slogen())
// console.log(tung.introduction())

class MyMath {
    static addition() {
        let total = 0;
        let len = arguments.length;
        for (let i = 0; i < len; i++) {
            total += arguments[i]
        }
        return total;
    }
}

console.log(MyMath.addition(5, 6, 6, 7, 8, 9))