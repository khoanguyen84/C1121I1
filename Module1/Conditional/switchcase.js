// let month = 7;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31");
//         break;
//     case 2:
//         console.log("28 hoặc 29");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30");
//         break;

//     default:
//         console.log("Invalid month")
// }

// let dtb = 6.6;
// switch (true) {
//     case dtb >= 9:
//         console.log("XS");
//         break;
//     case dtb >=8:
//         console.log("Giỏi");
//         break;
//     case dtb >= 7:
//         console.log("Khá");
//         break;
//     case dtb >=5:
//         console.log("TB");
//         break;
//     case dtb < 5:
//         console.log("Yếu");
//         break;
//     default:
//         console.log("Invalid month")
// }

let dtb = 8.6;
switch (dtb >= 9 ? "L1" : (dtb >= 8 ? "L2" : (dtb >= 7 ? "L3" : (dtb >= 5 ? "L4" : "L5")))) {
    case "L1":
        console.log("XS");
        break;
    case "L2":
        console.log("Giỏi");
        break;
    case "L3":
        console.log("Khá");
        break;
    case "L4":
        console.log("TB");
        break;
    case "L5":
        console.log("Yếu");
        break;
    default:
        console.log("Invalid month")
}

// let number = 8;
// let msg = "";
// if(number >= 8){
//     console.log("Lớn hơn bằng 8");
// }
// else{
//     console.log("Nhỏ hơn 8");
// }

// if(number >= 8){
//     msg = "Lớn hơn bằng 8";
// }
// else{
//     msg = "Nhỏ hơn 8";
// }
// console.log(msg);


// number >= 8 ? console.log("Lón hơn bằng 8") : console.log("Nhỏ hơn 8");
// console.log(number >= 8 ? "Lơn hơn bằng 8" : "Nhỏ hơn 8");
// console.log((number >= 8 ? "Lơn hơn bằng" : "Nhỏ hơn") + " 8");
// let gender = false;
// console.log(gender ? "Đi mua hoa" : "Được nhân hoa");