// Write a JavaScript function to compute the factors of a positive integer. 

function factors(number){
    fact=[];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        // console.log(`out of for ${i}`);
        if (number % i === 0){
            // console.log(i);
            fact.push(i);
            // console.log(fact);
            console.log(number/i);
            if (i !== number / i) {
                fact.push(number / i);
            }
        }
    }
    return fact.sort((a,b)=> a-b);
}

console.log(factors(12));