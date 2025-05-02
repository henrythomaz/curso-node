// This
    // This em classes

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log("Meu nome é", this.name, "e tenho", this.age, "anos")
        }
    }

    const person1 = new Person("Henry", 15);

    person1.greet();

    // Nas classes o this se referência a nova instância que criarmos (nesse caso o person1)