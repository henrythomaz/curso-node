// Maps

// const user = {
//     henry: {
//         age: 15,
//         coins: -2000
//     },
//     italo: {
//         age: 15,
//         coins: 1500
//     },
//     arthur: {
//         age: 15,
//         coins: 1200
//     }
// }

// user["alyson"] = { age: 15, coins: 100 }

// console.log(user.henry);
// console.log(user);

const users = new Map();

users.set("Henry", {age: 15, coins: -2000});
users.set("Italo", {age: 15, coins: 1500});
users.set("Arthur", {age: 15, coins: 1200});
users.set("Alyson", {age: 15, coins: 100});

console.log(users);
console.log(users.get("Henry"))