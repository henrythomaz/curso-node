// Call Backs

// Funções comuns que esperam call backs

const numbers = [3, 18, 21, 44, -92, 101, 204, 365]

const filtered = numbers.filter((number) => number > 50)
console.log(filtered)

function performe(exec) {
    const numbers2 = [3, 18, 21, 44, -92, 101, 204, 365]
    for (const number of numbers2) {
        exec(number);
    }
}

performe(number => console.log("Item atual " , number))