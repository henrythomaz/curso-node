// This

// const person = {
//     name: "Henry",
//     greet() {
//         console.log(this.name);

//         const upper = () => {
//             console.log(this.name.toUpperCase());
//         }
//         return { upper }
//     }
// }

// person.greet().upper()

const person = {
    name: "Henry",
    greet() {
        const chars = this.name.split("");
        // chars.forEach(char => {
        //     console.log(char, this.name);
        // });
        chars.forEach(function(char) { 
            console.log(char, this.name);
        }, this);
        console.log(this.name);
        return { 
            upper: () => {
            console.log(this.name.toUpperCase());
            }
        }
    }
}

person.greet().upper()

// Lembre-se: o this não funciona com funções anônimas