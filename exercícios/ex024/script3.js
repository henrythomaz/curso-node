// Funções

// Tipos de funções
    // Hoisting (içamento):

        // Nota-se que no método hoisting (içamento) a função pode ser chamada antes mesmo de ser declarada pois quando o código é executado ela vai pro topo do código

        const result = sub(16, 10)
        console.log(result)

        function sub(a, b) {
            return a - b
        }
    // Dentro de variáveis:

        // Arrow function
        // Nota-se: Quando eu declaro a minha função como uma arrow function ela fuciona como uma variável, por isso não pode ser chamada antes de declarada
        /*
        const result = sum(6, 3)
        console.log(result)
        */

        const sum = (a, b) => {
            return a + b
        }
        // Ou
            /* 
                const sum = (a, b) => a + b;
            */

        const result2 = sum(6, 10)
        console.log(result2)
    
    // IIFE
        //  Immediately invoked function expression
            /*
                ((paramFormal) => {
                    bloco
                }) (paramReal)
            */
           
        ((name) => {
            console.log(`Seja bem vindo, ${name}`)
        }) ("Henry")