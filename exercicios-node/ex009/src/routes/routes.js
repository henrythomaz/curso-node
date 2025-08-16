import { Router } from "express";
import customers from "../app/controllers/CustomersController.js";

const routes = new Router();

routes.get("/", customers.index);

export default routes;
