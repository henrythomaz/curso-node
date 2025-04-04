// Promise

// Uma promise é uma classe ou seja necessita contructor (um callback) e devolve um objeto; ela tem o objetivo de esperar por exemplo algo termnar pra depois ela começar
// Para conseguir o reultado de uma promise precisamos tratar ela: 
    /*
    then - quando a promise for resolvida com sucesso, 
    catch - quando a promise for rejeitada, 
    finally - é executado no final independente de a promise for bem sucedida ou rejeitada
    */
//    Nota-se: Os parâmetros dos tratamentos são o que passamos no resolve e no reject

function requestCar(drivers) {
    return new Promise((resolve, reject) => {
        if(drivers > 0) {
            return resolve("Seu motorista está a caminho!");
        } return reject("Não há motoristas disponíveis.")
    })
}

function main() {
    let drivers = 0;

    const request = requestCar(drivers);

    request.then((txt) => {
        console.log(`Promessa resolvida! ${txt}`)
    });
    request.catch((err) => {
        console.log(`Promessa rejeitada ${err}`)
    });
    request.finally(() => {
        console.log("              Promessa concluída")
    })
}
main();