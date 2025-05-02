const express = require('express');

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    return res.json({
        title: "Hello",
        message: "Olá companheiro, como você está?"
    })
});

server.get('/hello', (req, res) => {
    return res.send("<h1>Hello, World</h1>");
});

server.listen(3000, () => {
    console.log("rodando na porta", 3000)
});

// Portas famosas:

/*
    - 3000
    - 3333
    - 5000
    - 8000
    - 8080
*/