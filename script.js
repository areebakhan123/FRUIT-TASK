let appleinitialValue = 0;
let orangeinitialValue = 0;
let bananainitialValue = 0;
let applePrice  = 10; 
let orangePrice = 15;
let bananaprice = 7;
let totalvalue = 0;

function add1() {
    document.querySelector("#center").innerHTML =  ++appleinitialValue;
    let multiply = document.querySelector("#center").innerHTML;

    document.querySelector("h2 span").innerHTML = multiply * applePrice;
}
function minus1() {
    document.querySelector("#center").innerHTML =  --appleinitialValue;
    let multiply = document.querySelector("#center").innerHTML;
    document.querySelector("h2 span").innerHTML = multiply * applePrice;
}

function add2() {
    document.querySelector("#center2").innerHTML =  ++orangeinitialValue;
    let multiply = document.querySelector("#center2").innerHTML;

    document.querySelector("h2 span").innerHTML = multiply * orangePrice;
}
function minus2() {
    document.querySelector("#center2").innerHTML =  --orangeinitialValue;
    let multiply = document.querySelector("#center2").innerHTML;
    document.querySelector("h2 span").innerHTML = multiply * orangePrice;
}


function add3() {
    document.querySelector("#center3").innerHTML =  ++bananainitialValue;
    let multiply = document.querySelector("#center3").innerHTML;

    document.querySelector("h2 span").innerHTML = multiply * bananaPrice;
}
function minus3() {
    document.querySelector("#center3").innerHTML =  --bananainitialValue ;
    let multiply = document.querySelector("#center3").innerHTML;
    document.querySelector("h2 span").innerHTML = multiply * bananaPrice;
}
