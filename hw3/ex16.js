// Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueCharacters(sent) {
    let seen = "";
    for (let char of sent) {
        if (!seen.includes(char)) {
            seen += char;
        }
    }
    return seen;
}

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));