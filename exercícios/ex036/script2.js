// Async / Await /Promises

function getRandom() {
    return new Promise((resolve) => setTimeout(() => resolve(Math.random() * 30), 3000))
}

async function main() {
    console.log("Inicio do Programa!")
    await getRandom()
    .then(value => {
        console.log(value)
    })

    console.log("Fim do Programa!")
} main()