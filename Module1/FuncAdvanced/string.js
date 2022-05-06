// let chars = ["A", "B", "C", "D", "E", "F"];
// let len = chars.length - 1;
// let min = 0;
// let index = Math.floor(Math.random()*(len - min + 1) + min);
// console.log(chars[index]);

// function findMax(n1, n2, n3){
//     return (n1 > n2 && n1 > n3) ? n1 : (n2 > n3 ? n2 : n3);
// }

this.fullname = "Trí";
this.age = 18;

let khoa = {
    fullname : "Khoa",
    age : 18,
    showInfo(){
        console.log(this.fullname);
    }
}

let tuan = {
    fullname : "Tuấn",
    age : 19,
    showInfo(){
        this.child.info()
    },
    child: {
        fullname: "Tú",
        age : 2,
        info(){
            console.log(this);
        }
    }
}
// console.log(this)
// khoa.showInfo();
// tuan.showInfo();
// tuan.child.info();

function sum(n1, n2){
    console.log(n1, n2)
    return n1 + n2;
}
// sum();
// sum(5,7);
// let a = 7;
// let b = 8;
// sum(a, b);

Array.prototype.join2 = function(separetor=","){
    let len = this.length;
    let str = "";
    for(let i=0; i< len; i++){
        if(i != len - 1){
            str +=`${this[i]}${separetor}`
        }
        else{
            str +=`${this[i]}`
        }
    }
    return str;
}

let array = [1,2,2,3];
console.log(array.join2())
// array.join2();