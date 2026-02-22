// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 

function timesN(base, exp){
    return base ** exp;
}

// let base = prompt("Please enter a the base number");
// let exp = prompt("Please enter the exponent");
let base = 2;
let exp = 3;

console.log(timesN(base, exp))