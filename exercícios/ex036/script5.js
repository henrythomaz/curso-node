// Async / Await /Promises
// Na prática

import { text } from "@clack/prompts";

async function main() {
    const name = await text({ message: "Digite o seu nome!" });
    const age = await text({ message: `Digite a sua idade ${name}` });

    console.log("Seja bem vindo(a)", name);
    console.log(`Olha que legal ${name}, ${age} anos! Parabéns!`);
} main();