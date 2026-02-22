// Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  let result = operation(a, b);
  console.log(`Result: ${result}`);
}

calculate(10, 5, multiply);