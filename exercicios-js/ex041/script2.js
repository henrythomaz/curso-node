// Spread e Rest

// Spread com arrays

const positives = [1, 2, 3, 4];
const negatives  = [-1, -2, -3, -4];

const numbers = [...positives, ...negatives];

positives.push(22, 10)
console.log(numbers.sort())