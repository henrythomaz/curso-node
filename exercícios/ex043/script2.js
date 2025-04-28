// JSON
// Agora imagine você ter que pegar informações JSON de uma API mas a api transforma o JSON em string assim você tem tipo esse problema: "{ "type": "module", "language": "js"}" pra resolver isso a gente parseia com - parse

const person = JSON.parse("{\"name\": \"Rincko\"}");
console.log(person)
