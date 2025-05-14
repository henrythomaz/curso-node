import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import customers from "./app/controllers/CustomersController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = new Router();

// Servir index.html
routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// Rotas de API
routes.get("/customers", customers.index); 
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

export default routes;
