// Módulos 

    // Sintaxe CommonJS

        // Sem a desestruturação

        const math = require("./functions/math1")
        console.log(math.som(68, 10))
        
        // Com a desestruturação

        const { som, sub } = require("./functions/math1")
        const { catEmoji } = require("./constantes/emojis")

        console.log(`${som(10, 39)} ${catEmoji}`)
        console.log(`${sub(30, 5)} ${catEmoji}`)