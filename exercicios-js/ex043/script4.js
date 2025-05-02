// JSON
import { writeFileSync, readFileSync } from "node:fs" 
const person = {
    name: "Henry",
    age: 15,
    isProgrammer: true,
    greet() {
        console.log("Meu nome é", this.name)
    }
}

writeFileSync("./exercícios/ex043/newperson.json", JSON.stringify(person, null, 2), "utf-8")
