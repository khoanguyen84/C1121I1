/*
Biểu thức rẻ nhánh
loại 1: if
+ if
+ if .. else
+ nested if
+ bậc thang
loại 2: switch..case
*/

let dtb = 8.6;
// if(dtb >=9){
//     console.log("Xuất sắc");
// }
// else{
//     if(dtb>=8){
//         console.log("Giỏi")
//     }
//     else{
//         if(dtb>=7){
//             console.log("Khá")
//         }
//         else
//         {
//             if(dtb>=5){
//                 console.log("TB")
//             }
//             else{
//                 console.log("Yếu")
//             }
//         }
//     }
// }
// if(dtb >=9){
//     console.log("Xuất sắc");
// }
// else if(dtb>=8){
//     console.log("Giỏi")
// }
// else if(dtb >=7){
//     console.log("khá")
// }
// else if(dtb >=5){
//     console.log("TB")
// }
// else{
//     console.log("Yếu")
// }

console.log((dtb >= 9 ? "XS" : (dtb >= 8 ? "Giỏi" : (dtb >= 7 ? "Kha" : (dtb >=5 ? "TB" : "Yếu")))))