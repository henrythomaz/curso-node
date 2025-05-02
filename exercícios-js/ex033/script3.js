// Call Backs
// Recriado função de Array - FILTER
// Filter é um método de manipulação de arrays que espera um call back e filtra as propriedades do array de acordo com o retorno passado na função

function filter(array, callBack) {
    const filtered = [];

    for(let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            filtered.push(array[i])
        }
    }
    return filtered;
}

const names = ["Henry", "Heitor", "Isis", "Italo", "Lázaro", "Leonardo", "Arthur", "Alvaro"]
const filteredNames1 = filter(names, (name) => name.startsWith("I"))
const filteredNames2 = filter(names, (name) => name.endsWith("o"))

console.log(filteredNames1);
console.log(filteredNames2);

// Isso é incrível pois nós acabos de fazer o método filter