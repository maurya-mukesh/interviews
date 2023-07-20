const Vehicle = require("../model/Vehicle");

class VehicleController {
  constructor() {
    this.newVehicles = this.newVehicles.bind(this);
    this.updateVehicles = this.updateVehicles.bind(this);
    this.deleteVehicles = this.deleteVehicles.bind(this);
    this.searchVehicles = this.searchVehicles.bind(this);
    this.underMaintenance = this.underMaintenance.bind(this);
  }

  // Add a new vehicle
  async newVehicles(req, res) {
    try {
      const vehicle = new Vehicle(req.body);
      await vehicle.save();
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a vehicle
  async updateVehicles(req, res) {
    try {
      const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!vehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.status(200).json({
        success: true,
        message: "updated Successfully",
        data: vehicle,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a vehicle
  async deleteVehicles(req, res) {
    try {
      const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
      if (!vehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.json({ message: "Vehicle deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Search for available vehicles
  async searchVehicles(req, res) {
    try {
      const {
        make,
        model,
        year,
        seating_capacity,
        availability_status,
        fuel_type,
      } = req.query;
      const filters = {};

      if (make) filters.make = make;
      if (model) filters.model = model;
      if (year) filters.year = year;
      if (seating_capacity) filters.seating_capacity = seating_capacity;
      if (availability_status)
        filters.availability_status = availability_status === "true";
      if (fuel_type) filters.fuel_type = fuel_type;

      const vehicles = await Vehicle.find(filters);
      res.json(vehicles);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Mark a vehicle as "under maintenance" for a specific period
  async underMaintenance(req, res) {
    try {
      const { vehicleId } = req.params;
      const { startDate, endDate } = req.body;

      // Check if the vehicle is available for the maintenance period
      const existingBooking = await Booking.findOne({
        vehicle: vehicleId,
        startDate: { $lt: new Date(endDate) },
        endDate: { $gt: new Date(startDate) },
      });

      if (existingBooking) {
        return res.status(400).json({
          error: "Vehicle is already booked during the maintenance period",
        });
      }

      // Mark the vehicle as under maintenance
      await Vehicle.findByIdAndUpdate(vehicleId, {
        availability_status: false,
      });

      res.json({ message: "Vehicle marked as under maintenance successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new VehicleController();
