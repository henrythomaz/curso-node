// Bibliotecas

import chalk from "chalk";
import { intro, outro, text } from "@clack/prompts"




async function main() {
    console.log(`Programa de ${chalk.blue.underline.bold("Henry Dev")}`);
    intro(chalk.green("Bem vindo ao programa"));

    const name = await text({ message: "Qual o seu nome?" })
    
    outro(`Olá, ${name}!`)
    console.log(chalk.bgGreen("Success! "));
}

main()

// Nota-se: Se você quiser tirar uma biblioteca que instalou use npm remove nomeDaBiblioteca no cmd
// Se você tem alguma biblioteca nas dependencias é só dar npm install que ja instala todas as dependêcias