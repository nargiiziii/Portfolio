

let num_one = document.querySelector(".first-num");

let num_two = document.querySelector(".second-num");

let result = document.querySelector(".result");



let sum = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let mult = document.querySelector(".mult");
let divide = document.querySelector(".divide");


sum.addEventListener("click", sumOperation);
minus.addEventListener("click", minusOperation);
mult.addEventListener("click", multOperation);
divide.addEventListener("click", divideOperation);



function sumOperation(){
    sum = Number(num_one.value) + Number(num_two.value);

    if(num_one.value == "" || num_two.value == ""){
        alert("enter both numbers!!")
    } else {
        result.textContent = sum;
    }
    clearInputs()
}


function minusOperation(){
    minus = Number(num_one.value) - Number(num_two.value);

    if(num_one.value == "" || num_two.value == ""){
        alert("enter both numbers!!")
    } else {
        result.textContent = minus;
    }
    clearInputs()
}

function multOperation(){
    mult = Number(num_one.value) * Number(num_two.value);
  
    if(num_one.value == "" || num_two.value == ""){
        alert("enter both numbers!!")
    } else {
        result.textContent = mult;
    }
    clearInputs()
}

function divideOperation() {
    let first = Number(num_one.value);
    let second = Number(num_two.value);

    if (num_one.value === "" || num_two.value === "") {
        alert("enter both numbers!!");
    } else if (second === 0) {
        alert("you cannot divide by zero!!");
    } else {
        let divide = first / second;
        result.textContent = divide.toFixed(2);
    }
    clearInputs()
}


function clearInputs() {
    num_one.value = "";
    num_two.value = "";
}
