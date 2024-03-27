const display = document.getElementById('inp');

function Display(input){
    display.value += input
}


function equal(){
    display.value = eval(display.value)
}

function clear(){
    display.value = ""
}