// Sets

const mySet = new Set(["Henry", "Arthur", "Alyson", "Italo", "Italo", "arthur"]);

console.log(mySet);

// lembre-se que os Sets não funcionam muito bem com objetos: 

const mySet2 = new Set([{ name: "Henry" }]);

mySet2.add({ name: "Henry" })

console.log(mySet2);