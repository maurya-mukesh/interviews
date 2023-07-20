const Booking = require("../model/Booking");
const Vehicle = require("../model/Vehicle");

class BookingController {
  constructor() {
    this.booking = this.booking.bind(this);
    this.customersBookings = this.customersBookings.bind(this);
    this.vehiclesBookings = this.vehiclesBookings.bind(this);
  }
  // Create a new booking
  async booking(req, res) {
    try {
      const { vehicleId, customerId, startDate, endDate } = req.body;

      // Check if the vehicle is available for the given date range
      const existingBooking = await Booking.findOne({
        vehicle: vehicleId,
        startDate: { $lt: new Date(endDate) },
        endDate: { $gt: new Date(startDate) },
      });

      if (existingBooking) {
        return res.status(400).json({
          error: "Vehicle is not available for the selected date range",
        });
      }

      // Create a new booking
      const booking = new Booking({
        vehicle: vehicleId,
        customer: customerId,
        startDate,
        endDate,
      });

      // Mark the vehicle as unavailable during the booked period
      await Vehicle.findByIdAndUpdate(vehicleId, {
        availability_status: false,
      });

      await booking.save();
      res
        .status(201)
        .json({
          status: "success",
          message: "vehicles booked successfully",
          data: booking,
        });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all bookings for a customer
  async customersBookings(req, res) {
    try {
      const { customerId } = req.params;
      const bookings = await Booking.find({ customer: customerId }).populate(
        "vehicle"
      );
      res.json(bookings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all bookings for a vehicle
  async vehiclesBookings(req, res) {
    try {
      const { vehicleId } = req.params;
      const bookings = await Booking.find({ vehicle: vehicleId }).populate(
        "customer"
      );
      res.json(bookings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new BookingController();
