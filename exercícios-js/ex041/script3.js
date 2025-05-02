// Spreads e Rests

// O spread espalha as propriedades de um objeto em outro mas o rest pega as propriedades espalhadas
const positives = [1, 2, 3, 4];
const negatives = [-1, -2, -3, -4];
const numbers = [...positives, ...negatives];

const [one, two, ...others] = numbers
console.log(one, two, others);
console.log(others);