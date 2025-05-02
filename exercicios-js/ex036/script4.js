// Async / Await /Promises

import { setTimeout } from "node:timers/promises";

async function getNumber() {
    return 5;
}
async function main() {
    console.log("Começo do Programa!")
    // Nota-se: Seem o await ele faz uma concatenação do object value com o 1 porque é uma função asíncrona então mesmo que seja intantâneo usaremos o await!
    const value = await getNumber();
    console.log(value + 1)
} main();