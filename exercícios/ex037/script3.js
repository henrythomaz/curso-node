// Classes 

    // Getters e Setters
class Person 
{
    #name;
    #age;
    #money;
    constructor(name = "[desconhecido]", age = "[desconhecido]") {
        this.#name = name
        this.#age = age
    }
    getMoney() {
        return this.#money;
    }
    setMoney(value = 0) {
        this.#money = value;
    }
    incrementMoney(value) {
        this.setMoney(this.#money + value)
    }
    intro() {
        return `Meu nome é ${this.getName()}, e tenho ${this.getAge()} anos, dinheiro: ${this.getMoney()}`
    }
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
}
const person = new Person("Henry", 15);
person.setMoney(50)
person.incrementMoney(100)
person.incrementMoney(200)
console.log(person.intro());