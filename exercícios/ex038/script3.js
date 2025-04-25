// Datas 
// Métodos de formatação de datas

const date = new Date(2024, 0, 12, 12, 30);

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toUTCString());
console.log(date.toISOString());
console.log(date.toTimeString());

const timer = setInterval(() => {
    const date = new Date();
    console.log(date.getSeconds());
    if (date.getSeconds() > 30) clearInterval(timer);
}, 500);