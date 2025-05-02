// JSON

// Stringfy
const person = {
    name: "Henry",
    age: 15,
    isProgrammer: true,
    greet() {
        console.log("Meu nome é", this.name)
    }
}

const stringJson = JSON.stringify(person);
console.log(stringJson)

// stringfy converte de objeto pra string