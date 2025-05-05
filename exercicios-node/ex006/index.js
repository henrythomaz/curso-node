// Melhorando a organização do CRUD:

const express = require("express");
const server = express();
const PORT = 3000;

server.use(express.json());

server.get("/costumers", (req, res) => {

});

server.get("/costumers/:id", (req, res) => {

});

server.post("/costumers", (req, res) => {

});

server.put("/costumers/:id", (req, res) => {

});

server.delete("/costumers/:id", (req, res) => {

});

server.listen(PORT, () => {
    console.log("Rondando na porta:", PORT);
});