// This
// this faz referência ao objeto em que esta!
const person = {
    name: "Henry",
    greet() {
        console.log("Eu sou", this.name);
    }
}

person.greet()