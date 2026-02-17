// Write a JavaScript function that reverse a number. 
// Example x = 32243;

// Expected Output: 34223 

function reverseNumber(value){
    
    let reversedValue = 0
    let lastDigit = 0;
    while(value>0){
        lastDigit = value%10;
        reversedValue = (reversedValue*10) + lastDigit;
        value = Math.trunc(value / 10);
    }
    return reversedValue;
}
let x = 32243;
console.log(reverseNumber(x))