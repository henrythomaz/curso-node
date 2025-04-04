// Async / Await
// Async vem de asíncrono que significa que o código não é mais seguido passo a passo mas sim paralelamente só que as vezes nós precisamos esperar um valor termnar de ser executado antes de fazer a próxima coisa assim usamos o await

function requestCar(drivers) {
    return new Promise((resolve, reject) => {
        if(drivers > 0) {
            return resolve("Seu motorista está a caminho!");
        } return reject("Não há motoristas disponíveis.")
    })
}

async function main() {
    let drivers = 0;

    const request = await requestCar(drivers).catch(() => {null});
    if (!request) {
        console.log("[ Erro ]")
        return;
    }
    console.log(`Resultado: ${request}`)
}
main();