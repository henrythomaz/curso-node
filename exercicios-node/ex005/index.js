// Mudos de debugar:
const PORT = 3000;
const costumers = [
    { id: 1, name: "Henry Thomaz", site: "https://github.com/henrythomaz/curso-node" },
    { id: 2, name: "Google", site: "https://www.google.com.br/?hl=pt-BR" },
    { id: 3, name: "Youtube", site: "https://youtube.com" }
];
console.log("Mensagem", PORT);
console.log("Info parecido com o log", PORT);
console.warn("mensagem parecido com alerta", PORT);
console.error("erro", PORT);
console.debug("debugar", PORT);
console.table(costumers);

// Também temos: o debuger do js