// Original array of fruits
let fruits=["apple","banana"];

// Create a new array 'moreFruits' by copying all items from 'fruits'
// Using the spread operator ensures 'fruits' is not affected
let moreFruits=[...fruits];

// Add "orange" at the end by creating a new array again with spread
moreFruits=[...fruits,"orange"];

// Print the original array to show it has not changed
console.log(fruits); // Output: ["apple","banana"]

// Print the new array with the added fruit
console.log(moreFruits); // Output: ["apple","banana","orange"]