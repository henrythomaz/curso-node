// Async / Await /Promises

import { setTimeout } from "node:timers/promises";

async function main() {
    console.log("Começo do Programa!")
    const value = await setTimeout(2000, Math.random())
    console.log(value)
} main();