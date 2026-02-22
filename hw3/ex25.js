// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function  Longest_Country_Name(countries){
    longest = "";
    for (let country of countries){
        if (country.length > longest.length) {
            longest = country;
        }
    }
    return longest;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));