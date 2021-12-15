let table = '<table border=1>';

for (let row = 1; row <= 10; row++) {
    table += "<tr>";
    for (let col = 2; col <= 9; col++) {
        // table += "<td>" + col + " x " + row + " = " + (row * col) + "</td>";
        table += `<td>${col} x ${row} = ${col * row}</td>`;
    }
    table += "</tr>";
}
table += "</table>";
document.getElementsByTagName("div")[0].innerHTML = table;


let gender = false;
let name = "Thư";
let married = false;

document.write(`<p style='background-color:${gender ? 'red' : (married ? 'blue' : 'green')}'>Hello, ${gender ? 'Mr' : (married ? "Mrs" : 'Ms')}. ${name}<p>`);