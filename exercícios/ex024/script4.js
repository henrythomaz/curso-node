// Funções

    // Reutilizando funções

    /*
        let result = 1;
        for (let i = 1; i <= 10; i++) {
            result *= i
        }

        console.log(result)
    */

        function fatorial(i = 1) {
            let result = 1;
            for (let f = 1; f <= i; f++) {
                result *= f
            }
            return result
        }
        console.log(fatorial(6))
        console.log(fatorial(7))
        console.log(fatorial(8))
        console.log(fatorial(21))
