// Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountToCoins(amount, coins) {
    const change = [];
    for (let coin of coins) {
        while (amount >= coin) {
            change.push(coin);
            amount -= coin;
        }
    }
    return change;
}
let number = 46;
let coins = [25, 10, 5, 2, 1];
console.log(amountToCoins(number, coins))