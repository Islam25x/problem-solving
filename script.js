// Q1

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers1);
console.log(evenNumbers);

// .....................................................................................

// Q2

    function findLargestNumber(arr) {
        return Math.max(...arr);
    }
    
    // Example usage
    const numbers2 = [10, 45, 32, 89, 3];
    const largestNumber = findLargestNumber(numbers2);
    console.log(largestNumber);


// .....................................................................................

// Q3

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Example usage
    const input = "hello";
    const reversed = reverseString(input);
    console.log(reversed);

    // .....................................................................................

// Q4

function removeDuplicates(arr) {
    return [...new Set(arr)];
}  
    const numbers3 = [1, 2, 3, 2, 4, 1, 5];
    const uniqueNumbers = removeDuplicates(numbers3);
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
