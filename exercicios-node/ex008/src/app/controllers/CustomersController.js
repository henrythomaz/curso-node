let customers = [
    { id: 1, name: "Google", site: "https://www.google.com" },
    { id: 2, name: "Youtube", site: "https://youtube.com" },
    { id: 3, name: "GItHub", site: "https://github.com" }
];

class CustomersController
{
    index(req, res) {
        return res.json(customers);
    };
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer > 0 ? 200 : 404;

        return res.status(status).json(customer);
    };
    create(req, res) {
        const { name, site } = req.body;
        console.log("Recebido:", name, site);
        const id = customers[customers.length -1].id + 1;
        const newCustomer = { id: id, name: name, site: site };
        customers.push(newCustomer);

        return res.status(201).json(customers);
    };
    update(req, res) {
      const id = parseInt(req.params.id);
      const { name, site } = req.body;
      const index = customers.findIndex( index => index.id === id );
      const status = index >= 0 ? 200 : 404;

      if( index >= 0 ) {
        customers[index] = { id: id, name, site };
      }

      return res.status(status).json(customers[index]);
    };
    destroy(req, res) {
      const id = parseInt(req.params.id);
      const index = customers.findIndex( index => index.id === id );
      const status = index >= 0 ? 200 : 404;

      if( index >= 0 ) {
        customers.splice( index, 1 );
      }

      return res.status(status).json(customers);
    }
}export default new CustomersController();