// Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, target, start, end){
    if(start > end){
        return "Not found";
    }
    const middle = Math.floor((start + end)/2);
    if(arr[middle] === target){
        return  `Found it at index ${middle}`;
    }
    if (arr[middle] > target) {
        return binarySearch(arr, target, start, middle - 1);
    }
    return binarySearch(arr, target, middle + 1, end);
}

let arr = [5,7,32,3,4,7,0,5,4,6,5,12,];
let sorted = arr.sort((a,b)=>a-b)
console.log(sorted);
console.log(binarySearch(sorted, 3, 1, sorted.length-1));