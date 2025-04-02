// Call Backs

// É um tipo de função que tem como parâmetros como outra função:

    function performe(name, exec) {
        console.log(name, "executou uma função");
        exec();
    }
    performe("Henry", () => {
        console.log("Olá")
    })