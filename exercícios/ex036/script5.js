// Async / Await /Promises
// Na prática

/*
import { text } from "@clack/prompts";

async function main() {
    const name = text({ message: "Digite o seu nome!" });
    const age = await text({ message: `Digite a sua idade ${name}` });

    console.log("Seja bem vindo(a)", name);
    console.log(`Olha que legal ${name}, ${age} anos! Parabéns!`);
} main();
*/
import { text } from "@clack/prompts";

async function main() {
    text({ message: "Digite o seu nome!" })
    .then(name => {
        console.log(`Olá, ${name}`);
    })
    .finally(() => {
        console.log("FIm do programa");
    })

} main();
