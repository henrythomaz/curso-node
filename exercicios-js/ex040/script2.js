// Maps

// Nós podemos inicializar os maps com propriedades:

const users = new Map([
    [ "Henry", { age: 15, coins: -2000 } ], // - tupla
    [ "Arthur", { age: 15, coins: 1200 } ], // - tupla
    [ "Alyson", { age: 15, coins: 100 } ], // - tupla
    [ "Italo", { age: 15, coins: 1500 } ] // - tupla
]);

console.log(users);
    // Métodos:
    /*
        - delete (deleta uma tupla)
        - size (mostra o tamanho do map)
        - has (verifica se existe uma tupla com aquela chave)
        - entries (retorna as entradas das tuplas do map para um for)
        - keys (retorna as chaves das tuplas do map)
        - values (retorna as propriedades das tuplas do map)
        - forEach (passa uma função pra cada tupla)
    */
users.delete("Alyson");

console.log(users);
console.log(users.size);
console.log(users.has("Alyson"));

for (const [ key, value ] of users.entries()) {
    console.log("A chave é:", key);
    console.log("O valor é:", value);
}
for (const key of users.keys()) {
    console.log("A chave é:", key);
}
for (const value of users.values()) {
    console.log("O valor é:", value);
}
users.forEach(user => {
    console.log(user)
})

// Lembra que o map não pode ter itens duplicados!
// DICA - Passe todos os valores sendo do mesmo tipo