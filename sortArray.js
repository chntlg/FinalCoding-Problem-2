// Prompt the user to enter arrays
let numbers = prompt("Enter numbers separated by commas:", "24, 65, 21, 5, 9, 32, 42, 80, 57")
    .split(",")
    .map(Number); // Convert the input string into an array of numbers

let names = prompt("Enter names separated by commas:", "Zenvo, Erica, Jordie, Alicia, Redon")
    .split(",")
    .map(name => name.trim()); // Convert the input string into an array of names

// Merge both arrays
let mergedArray = [...numbers, ...names];
alert("Merged Array: " + mergedArray.join(", ")); // Display merged array as a string

// Sort numbers in reverse order (descending)
let sortedNumbers = [...numbers].sort((a, b) => b - a); // Descending numerical sort
alert("Numbers sorted in reverse: " + sortedNumbers.join(", "));

// Sort names alphabetically
let sortedNames = [...names].sort(); // Alphabetical sort
alert("Names sorted alphabetically: " + sortedNames.join(", "));