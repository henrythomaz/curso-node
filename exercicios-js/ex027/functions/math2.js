// Módulo
    // Síntaxe ES modules

        // Na declaração

        /*
        export function som(a, b) {
            return a + b
        }

        export function sub(a, b) {
            return a - b
        }
        */

        // No final

        function som(a, b) {
            return a + b
        }

        function sub(a, b) {
            return a - b
        }

        export { som, sub }
        // Nota-se: Nós podemos utilizar o export default porém, não podemos usar a desestruturação na importação só podemos por o nome do arquivo no from que no caso é math2, lembrando que pra utilizar nós precisaremos do método dot notation: math.som(a, b)