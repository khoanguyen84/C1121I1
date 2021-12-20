function sum(){
    // let number1 = Number(document.getElementById('number1').value);
    // let number2 = Number(document.getElementById('number2').value);
    let number1 = Number(document.getElementsByTagName('input')[0].value);
    let number2 = Number(document.getElementsByTagName('input')[2].value);
    document.getElementById('result').innerText = number1 + number2;
    // console.log(result);
}

// sum();
// document.getElementsByTagName('input')[1].addEventListener("change", function(){
//     if(Number(document.getElementsByTagName('input')[1].value == 100)){
//         document.getElementsByTagName("button")[0].addEventListener('click', sum);
//     }
//     else{
//         document.getElementsByTagName("button")[0].removeEventListener('click', sum);
//     }    
// })

// console.log(1 - 'a');
// console.log(1 - '1');

(function(){
    console.log('a');
})();