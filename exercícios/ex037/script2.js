// Classes 

    // Propriedades privadas
    class Person 
{
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    intro() {
        return `Meu nome é ${this.#name}, e tenho ${this.#age} anos`
    }

}
const person = new Person("Henry", 15);
person.name = "Isis"; // X
console.log(person.intro());