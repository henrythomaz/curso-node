// Fuções recursivas
// Lembre-se de passar uma condição pois se o código fica executando uma função sem parar ele cracha
function sum(number, result = 0) {
    if (number <= 0) {
        return result;
    }
    return sum(number  -1, result + number)
}

console.log(sum(0, 3))