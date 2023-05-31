let celsius = document.querySelector("#numb1");
let ans1 = document.querySelector(".display1");

let fahrenheit = document.querySelector("#numb2");
let ans2 = document.querySelector(".display2");

// BODMAS  RULE
function cTof(){
    let calculationC = parseFloat(celsius.value * 1.8 + 32);
    ans1.innerText = calculationC.toFixed(2)
}

function fToc(){
    let calculationC = parseFloat((fahrenheit.value - 32 )/ 1.8);
    ans2.innerText = calculationC.toFixed(0);
}
