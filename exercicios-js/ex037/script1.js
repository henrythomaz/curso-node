// Classes

    // const person = {
    //     name: "Henry",
    //     age: 15,
    //     intro() {
    //         return `Meu nome é ${this.name}`
    //     }
    // }

    // console.log(person.name);
    // console.log(person.intro());

    // const person2 = {
    //     name: "Isis",
    //     age: 13,
    //     intro() {
    //         return `Meu nome é ${this.name}`
    //     }
    // }

    // console.log(person2.name);
    // console.log(person2.intro());

class Person 
{
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    intro() {
        return `Meu nome é ${this.name}, e tenho ${this.age} anos`
    }

}
const person = new Person("Henry", 15);
console.log(person.intro());