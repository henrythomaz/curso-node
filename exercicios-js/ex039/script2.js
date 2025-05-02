// Sets

import { text } from "@clack/prompts";

async function main() {
    const input = await text({ message: "Digite vários números" });

    const inputNumbers = input.split(" ").map(Number)
    const numbers = new Set(inputNumbers);

    console.log(inputNumbers);
    console.log(numbers);
} main();