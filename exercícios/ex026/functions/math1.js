// Módulo
    // Síntaxe commonJS

        // Fora
        /*
        function som(a, b) {
            return a + b
        }

        function sub(a, b) {
            return a - b
        }

        module.exports = { som, sub }
        */


        // Dentro

        module.exports = {
            som(a, b) {
                return a + b
            },
            sub(a, b) {
                return a - b
            }
        }