// Call Backs

// É um tipo de função que tem como parâmetros como outra função:

    // Recebendo um call back em uma função:
    function performe(name, exec) {
        const title = "Curso de JavaScript"
        console.log(name, "executou uma função");
        exec(title);
    }
    performe("Henry", (title) => {
        console.log("Olá")
        // Nota-se: Agora podemos pegar uma variável mesmo fora do escopo
        //                         ⬇️
        console.log(`O título é ${title}`)
    })
