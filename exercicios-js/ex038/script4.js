// Datas

// Comparando datas

const present = new Date();
const date = new Date(2025, 9, 28);

console.log(present.toLocaleString())
console.log(date.toLocaleString())

if (date < present) {
    console.log("Prazo esgotado");
    console.log("Hoje é dia", present.getDate(), "de", present.getMonth());
    console.log("A entrega deveria ter ocorrido no dia", date.getDate(), "do", date.getMonth());
} else {
    console.log("Dentro do prazo");
    console.log("Hoje é dia", present.getDate(), "do", present.getMonth());
    console.log("A entrega deveria será executada no dia", date.getDate(), "do", date.getMonth());   
}