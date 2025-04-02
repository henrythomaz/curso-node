// Desestruturação

function main() {
    const person = {
        name: "Henry",
        idade: 15,
        isProgrammer: true
    };
    // const name = person.name; X
    const { name, idade, isProgrammer } = person;
    console.log(name, idade, isProgrammer)
};

main();


