// CRUD completo

const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.json());

let costumers = [
    { id: 1, name: "Henry Thomaz", site: "https://github.com/henrythomaz/curso-node" },
    { id: 2, name: "Google", site: "https://www.google.com.br/?hl=pt-BR" },
    { id: 3, name: "Youtube", site: "https://youtube.com" }
];

server.get("/costumers", (req, res) => {
    return res.json(costumers);
});

server.get("/costumers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const costumer = costumers.find(item => item.id == id);
    const status = costumer ? 200 : 404;


    return res.status(status).json(costumer);
});

server.post("/costumers/", (req, res) => {
    const { name, site } = req.body;
    const id = costumers[costumers.length - 1].id + 1;
    const newCostumer = { id: id, name: name, site: site };
    costumers.push(newCostumer);

    return res.status(201).json(costumers);
});
server.put("/costumers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = costumers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0) {
        costumers[index] = { id: id, name, site };
    }

    return res.status(status).json(costumers[index]);
});

server.delete("/costumers/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = costumers.findIndex(item => item.id === id);
    const status = index ? 200 : 404;

    if(index >= 0) {
        costumers.splice(index, 1);
    }

    return res.status(status).json(costumers);
})

server.listen(PORT, () => {
    console.log('Rodando na porta:', PORT);
});