// Maps

// Nós podemos inicializar os maps com propriedades:

const users = new Map([
    [ "Henry", { age: 15, coins: -2000 } ], // - tupla
    [ "Arthur", { age: 15, coins: 1200 } ], // - tupla
    [ "Alyson", { age: 15, coins: 100 } ], // - tupla
    [ "Italo", { age: 15, coins: 1500 } ] // - tupla
]);

console.log(users);

users.delete("Alyson");

console.log(users);
console.log(users.size);
console.log(users.has("Arthur"));

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