// Caminhos

import { som } from "./functions/math/som.js"
import { sub } from "./functions/math/sub.js"

const a = 1;
const b = 3;
const adi = som(a, b);
const subt = sub(a, b);
console.log(`A soma da adição entre ${a} e ${b} é: ${adi} e a da subtração é: ${subt}`)

// Caminhos Relativos:

    /*
        ./ Mesma pasta
        ../ Volta uma pasta
        ../../ Volta duas pastas
        ./folder/ Entra em uma pasta
        ../out/ Volta uma pasta e entra em outra
        ./file.js Acessa um arquivo
        ./folder/file.js Acessa um arquivo dentro de uma pasta
        ../folder/file.js Volta uma pasta, entra em outra pasta e acessao arquivo
        ../../file.js Volta duas pasta e acessa o arquivo
    */