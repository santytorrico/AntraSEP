// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function secondPlace(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    return [
        sorted[1], 
        sorted[sorted.length - 2]
    ];
}

let numbers = [12,24,3,44,5,19,80,5];
console.log(secondPlace(numbers));