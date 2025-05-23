// ** Deixando tudo mais moderno --dependências--

let customers = [
    { id: 1, name: "GitHub", site: "https://github.com" },
    { id: 2, name: "Youtube", site: "https://youtube.com" },
    { id: 3, name: "Google", site: "https://www.google.com" }
];

class CustomersController
{
    // Mostra todos os customers
    index(req, res) {
        return res.json(customers);
    };
    // Mostra um customer em específico
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer >= 0 ? 200 : 404;

        return res.status(status).json(customer);
    };
    // Cria um customer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length -1].id + 1;
        const newCustomer = { id: id, name: name, site: site };
        customers.push(newCustomer);

        return res.status(201).json(customers);
    };
    // Atualiza um customer
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(status === 200) {
            customers[index] = { id: id, name, site };
        }

        return res.status(status).json(customers[index]);
    };
    // Deleta um customer
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(status === 200) {
            customers.splice(index, 1);
        };
        res.status(status).json(customers);
    };
} export default new CustomersController();