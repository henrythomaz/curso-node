const { route } = require("../../app");

let customers = [
    { id: 1, name: "GitHub", site: "https://github.com" },
    { id: 2, name: "Youtube", site: "https://youtube.com" },
    { id: 3, name: "Google", site: "https://www.google.com" }
];

class CustomersController
{
    // Mostra todos os customers
    show(req, res) {
        return res.json(customers);
    };
    // Mostra um customer em específico
    index(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.find(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        res.status(status).json(index);
    };
    // Cria um customer
    create(req, res) {
        const id = customers[customers.length -1].id + 1;
        const { name, site } = req.body;
        const newCustomer = { id: id, name: name, site: site };
        customers.push(newCustomer);

        res.status(201).json(customers);
    };
    // Atualiza um customer
    update(req, res) {
        const id = req.params.id;
        const { name, site } = req.body;
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
        
        if(status === 200) {
            costumers[index] = { id: id, name, site };
        }

        return res.status(status).json(costumers[index]);
    };
    // Deleta um customer
    delete(req, res) {
        const id = req.params.id;
        const index = costumers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(status === 200) {
            costumers.splice(index, 1);
        };

        res.status(status).json(customers);
    };
} module.exports = new CustomersController();