const { Router } = require('express');
const customers = require('./app/controllers/CustomersController.js');
const { router } = require('./app.js');
const routes = new Router;

routes.get('/customers', customers.show);
routes.get('/customers/:id', customers.index);
routes.post('/customers', customers.create);
routes.put('/customers/:id', customers.update);
routes.delete('/customers/:id', customers.delete);

module.exports = routes;