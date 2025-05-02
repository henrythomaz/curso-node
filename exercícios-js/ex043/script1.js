// JSON - JavaScript Object Notation (Notação de javaScript em objeto)

// JSON é um formato de arquivo fácil de ler para humanos e fácil de a máquina analisar

const person = {
    name: "Henry",
    age: 15,
    isProgrammer: true
}
// A sintaxe do JSON é como a dos objetos prém as chaves são envolvidas com aspas e o ultimo item não pode ter vírgula no final
// Nós podemos iimportar o JSON

import json from "./person.json" with { type: "json" }

console.log(json.name)
