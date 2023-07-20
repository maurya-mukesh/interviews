const Customer = require("../model/Customer");

class CustomersController {
  constructor() {}

  // Add a new customer
  async newCustomers(req, res) {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).json(customer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a customer
  async updateCustomer(req, res) {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(customer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a customer
  async deleteCustomer(req, res) {
    try {
      const customer = await Customer.findByIdAndDelete(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json({ message: "Customer deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
module.exports = new CustomersController();
