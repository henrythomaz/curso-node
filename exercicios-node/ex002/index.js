// Parâmetros de consulta

const express = require('express');

const server = express();
const PORT = 3000;

// Query  params = ?nome=Henry&idade=15
// http://localhost:3000/?nome=Henry&idade=15 -- parâmetros opcionais

server.get('/hello', (req, res) => {
    const { nome, idade } = req.query;

    return res.json({
        title: "Hello, World!",
        message: `Olá ${nome}!, como você está?`,
        idade: idade
    });
});

// Route params = /hello:nome
// http://localhost:3000/hello/Henry -- parâmetros obrigatórios

server.get('/hello/:nome/:idade', (req, res) => {
    const {nome, idade} = req.params;

    return res.json({
        title: "Hello, world",
        message: `Tudo bem ${nome}?`,
        idade: `${idade}? ...nossa!`
    });
});

server.listen(PORT, () => {
    console.log(`rodando na porta: ${PORT}`);
})