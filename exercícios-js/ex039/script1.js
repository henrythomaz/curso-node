// Sets

// Sets são como arrays porém não permitem números repetidos
const numbers = new Set([1, 4, 22, 4, 98, 5, 5,-32]);
numbers.add(22)
numbers.add(22)
numbers.add(22)
console.log(numbers)

// Métodos dos sets:

/*
    - add (adiciona uma propriedade ao set)
    - delete (deleta uma propriedade do set)
    - has (verifica se uma propriedade existe no set)
    - size (mostra o tamanho do set - Quantas propriedades ele tem)
    - values (pega cada propriedadde para usar em um for)
    - forEach (varre o set parâmetro por parâmetro, e passa um callBack pra cada um)
    - clear (limra todo o set)
*/
console.log(numbers.add(20));
numbers.delete(5)
console.log(numbers);
console.log(numbers.has(-32));
console.log(numbers.size);
for (const number of numbers.values()) {
    console.log(number)
}
numbers.forEach(item => console.log(item * 2));

numbers.clear();