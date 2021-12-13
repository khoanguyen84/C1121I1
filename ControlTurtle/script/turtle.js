const arrow_left = 37;
const arrow_up = 38;
const arrow_right = 39;
const arrow_down = 40;
const step = 5;
const turtle_move_right = "/images/right.jpg";
const turtle_move_left = "/images/left.jpg";
const turtle_move_up = "/images/up.jpg";
const turtle_move_down = "/images/down.jpg";
const turtle_width = "100px";
const turtle_height = "100px";

function init(){
    let turtle = document.getElementById('turtle');
    turtle.src = turtle_move_right;
    turtle.style.width = turtle_width;
    turtle.style.height = turtle_height;
    turtle.style.position = "relative";
    turtle.style.left = 0;
    turtle.style.top = 0;

    window.addEventListener("keydown", controlTurtle);
}


function controlTurtle(event){
    switch (event.keyCode) {
        case arrow_left:{
            let turtle = document.getElementById('turtle');
            turtle.src = turtle_move_left;
            if(parseInt(turtle.style.left) >= 0){
                turtle.style.left = (parseInt(turtle.style.left) - step) + "px";
            }
            break;
        }
        case arrow_right:{
            let turtle = document.getElementById('turtle');
            turtle.src = turtle_move_right;
            if(parseInt(turtle.style.left) + parseInt(turtle.style.width) + step < window.innerWidth){
                turtle.style.left = (parseInt(turtle.style.left) + step) + "px";
            }
            break;
        }
        case arrow_up:{
            let turtle = document.getElementById('turtle');
            turtle.src = turtle_move_up;
            if(parseInt(turtle.style.top) >= 0){
                turtle.style.top = (parseInt(turtle.style.top) - step) + "px";
            }
            break;
        }
        case arrow_down:{
            let turtle = document.getElementById('turtle');
            turtle.src = turtle_move_down;
            if(parseInt(turtle.style.top) + parseInt(turtle.style.height) + step < window.innerHeight){
                turtle.style.top = (parseInt(turtle.style.top) + step) + "px";
            }
            break;
        }
        default:
            alert("please using arrow keys!")
            break;
    }
}