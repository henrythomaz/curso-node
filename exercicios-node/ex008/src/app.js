// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());

    this.server.use(express.static(path.resolve(__dirname, "..", "public")));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
