import Customer from "../models/Customer.js";

class CustomersController {
  async index(req, res) {
    const data = await Customer.findAll({
      limit: 1000,
    });
    return res.status(200).json(data);
  }
}
export default new CustomersController();

