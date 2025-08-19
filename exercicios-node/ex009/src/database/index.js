import Sequelize from "sequelize";
import config from "../config/database.js";

// Importe todos os modelos
import Customer from "../app/models/Customer.js";
import Contact from "../app/models/Contact.js";
import User from "../app/models/User.js";

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.models = {
      Customer,
      Contact,
      User,
    };

    this.initModels();

    this.runAssociations();
  }

  initModels() {
    Object.keys(this.models).forEach((modelName) => {
      const model = this.models[modelName];
      if (typeof model.init === "function") {
        model.init(this.connection);
      }
    });
  }

  runAssociations() {
    Object.keys(this.models).forEach((modelName) => {
      const model = this.models[modelName];
      if (typeof model.associate === "function") {
        model.associate(this.models);
      }
    });
  }
}

const database = new Database();
export default database;
