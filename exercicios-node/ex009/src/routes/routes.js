import { Router } from "express";
import customers from "../app/controllers/CustomersController.js";

const routes = new Router();

routes.get("/customers", customers.index);

export default routes;
