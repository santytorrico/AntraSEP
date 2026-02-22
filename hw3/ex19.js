// Write a JavaScript function that returns array elements larger than a number.
function largerThan(arr, number){
    return arr.filter((larger)=> larger>number);
}

let numbers = [3,5,1,9,40,3]
console.log(largerThan(numbers, 3));