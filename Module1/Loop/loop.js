// let i = 1;
// for (; ; ) {
//     console.log(i);
//     i++;
//     if(i >=10)
//         break;
// }
// console.log(i)

// for (let i = 0; i < 10; i++) {
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if(i % 2 !=0){
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 5; i < 100; i+=5) {
//     console.log(i);
// }

// for (let i = 100; i > 0; i-=5) {
//     // console.log(i - (i -= 5));
//     console.log(100 - i + 5);
// }

// let count = 0;
// for (var i = 5, count = 1; i < 100 && count < 10; i+=5, count++) {
//     console.log(i);
// }
// console.log(count)

// let i = 100;
// while (i < 100) {
//     console.log(i);
//     i += 5;
// }

// let i=100;
// do{
//     console.log(i);
//     i+=5;
// }
// while(i<100)
// let number = 0;
// do {
//     number = +prompt("Enter number: ");
//     document.write(number);
// }
// while (number != 0);


// let number = +prompt('Enter number');
// while (number != 0) {
//     document.write(number);
//     number = +prompt('Enter number');
// }
// let count = 0;
// while(10){
//     console.log('test');
//     count ++;
//     if(count == 5)
//         break;
// }

let number = +prompt('enter here');
for (; number !== 0;) {
    document.write(number);
    number = +prompt('enter here');
}