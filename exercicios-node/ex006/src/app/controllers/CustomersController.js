let customers = [
    { id: 1, name: "Henry Thomaz", site: "https://github.com/henrythomaz/" },
    { id: 2, name: "Amazon", site: "https://amazon.com.br" },
    { id: 3, name: "rocketSeat", site: "https://biblioteca.rocketseat.com.br/" }
];

class CustomersController
{
    // Lstagem dos Customers
    index(req, res) {
        return res.json(customers);
    };
    // Recupera um Costomer
    show(req, res) {
        const id = parseInt(req.params.id);
        const costumer = customers.find(costumer => costumer.id === id);
        const status = costumer ? 200 : 404;
    
        return res.status(status).json(costumer);
    };
    // Cria um Costomer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length -1].id + 1
        const newCostumer = { id: id, name: name, site: site };
        customers.push(newCostumer);
    
        return res.status(201).json(customers);
    };
    // Atualiza um Costomer
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
    
        if(index >= 0) {
            customers[index] = { id: id, name, site };
        }
    
        return res.status(status).json(customers[index]);
    };
    // Deleta um Costumer
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
    
        if (index >= 0) {
            customers.splice(index, 1);
        }
    
        return res.status(status).json(customers);
    };
} module.exports = new CustomersController();