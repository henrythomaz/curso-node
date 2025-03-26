// Desestruturação

function main() {
    const person = {
        name: "Henry",
        idade: 15
    };
    const name = person.name;
    const { name2 } = person;
};
main();

const array = ["Henry", 15, "Campos"];

const [firstName, idade, lastName] = array;

console.log(firstName, idade, lastName);

const {firstName: name} = player;
