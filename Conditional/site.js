// let 
// var
// const
// scope ~ phạm vi
/*
    Toàn cục (toàn cầu) : Global
    Trong 1 khối : Code Block
    Cục bộ : Local
*/ 
// let number = 7;
// console.log(number);    // 7 | 8
// if(true){
//     let number = 8;
//     console.log(number); // 8 | 8
// }
// console.log(number); // 7 | 8

// const pi = 3.14;
// pi = 3.1414


// closrue
{
    var n1 = 8;
    {
        var n1 = 9;
        {
            var n1 = 10;
        }
    }
}
let n11 = 11;
console.log(n11);