// Booleanos

const isOpen = false;
if (isOpen) {
    console.log("A porta está aberta")
} else {
    console.log("A porta está fechada")
}

    // Tudo é um valor booleano
    const main = () => {}

    if (30 || -5 || "Henry" || 'DEV' || 'desenvolvedor' || true || { } || main ) {
        console.log("verdadeiro")
    } else if (false || 0 || -0 || NaN || "" || '' || `` || null || undefined ) {
        console.log("false")
    }

    // Truthy

    /*
        true
        12 1 4 -5 82 -44
        "Henry" "A" 'Juliano' `Cristiano`
        { } { name: "Henry" } { age: 15 }
        () => {}
    */
    // Falsy

    /*
        false
        0 -0 NaN
        "" '' ``
        null undefined
    */

// Para verificar se o valor é truthy ou falsy use !!

const result = "Henry";
const numbers = [0, 1, -0, 3];

console.log(!!result)
console.log(numbers.every(Boolean))