function sum(n1, n2) {
    let total = n1 + n2;
    // return {
    //     "n1": n1,
    //     "n2" : n2,
    //     "Total" : total
    // };
    return {
        "data": [n1, n2, total]
    };
}

let result = sum(10, 20);
console.log(result.data[1])

let students = [
    {
        id: 1,
        fullName: "Tuấn",
        age: 18,
        email: "tuan@codegym.vn"
    },
    {
        id: 2,
        fullName: "Trường",
        age: 18,
        email: "truong@codegym.vn"
    },
    {
        id: 3,
        fullName: "Trí",
        age: 18,
        email: "tri@codegym.vn"
    },
]

let ages = students.map(function (student, index) {
    return student.fullName.includes('Tuấn');
})

console.log(ages)

let upper = ["A", "B", "C", "D", "E", "F"];
let lower = ["a", "b", "c", "d", "e", "e"];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let existUpper = false;
let existLower = false;
let existNUmber = false;
let password = "Asdf1234!";
function isStronglyPassword(password) {
    for (let c of password) {
        if (upper.includes(c)) {
            existUpper = true;
        }
        if (lower.includes(c)) {
            existLower = true;
        }
        if (number.includes(parseInt(c))) {
            existNUmber = true;
        }
    }
    // for (let c = 0; c < password.length; c++) {
    //     if (upper.includes(password[c])){
    //         existUpper = true;
    //     }
    //     if (lower.includes(password[c])){
    //         existLower = true;
    //     }
    //     if (number.includes(parseInt(password[c]))){
    //         existNUmber = true;
    //     }
    // }

    return existLower && existNUmber && existUpper && password.length >= 8;
}

console.log("Check strong password:", isStronglyPassword(password));