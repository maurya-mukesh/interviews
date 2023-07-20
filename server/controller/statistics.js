// routes/statistics.js
// const Vehicle = require("../model/Vehicle");
const Booking = require("../model/Booking");

class Statistics {
  constructor() {
    this.mostPopularVehicle = this.mostPopularVehicle.bind(this);
    this.bookingsPerVehicle = this.bookingsPerVehicle.bind(this);
    this.averageRentalDuration = this.averageRentalDuration.bind(this);
  }
  // Get the most popular vehicle (based on the number of bookings)
  async mostPopularVehicle(req, res) {
    try {
      const bookingsPerVehicle = await Booking.aggregate([
        {
          $group: {
            _id: "$vehicle",
            totalBookings: { $sum: 1 },
          },
        },
        {
          $lookup: {
            from: "vehicles",
            localField: "_id",
            foreignField: "_id",
            as: "vehicleData",
          },
        },
        {
          $unwind: "$vehicleData",
        },
        {
          $sort: { totalBookings: -1 },
        },
        {
          $limit: 1,
        },
        {
          $project: {
            _id: 0,
            vehicle: "$vehicleData",
            totalBookings: 1,
          },
        },
      ]);

      if (bookingsPerVehicle.length === 0) {
        return res.json({ message: "No bookings found" });
      }

      res.json(bookingsPerVehicle[0]);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get the number of bookings per vehicle
  async bookingsPerVehicle(req, res) {
    try {
      const bookingsPerVehicle = await Booking.aggregate([
        {
          $group: {
            _id: "$vehicle",
            totalBookings: { $sum: 1 },
          },
        },
        {
          $lookup: {
            from: "vehicles",
            localField: "_id",
            foreignField: "_id",
            as: "vehicleData",
          },
        },
        {
          $unwind: "$vehicleData",
        },
        {
          $project: {
            _id: 0,
            vehicle: "$vehicleData",
            totalBookings: 1,
          },
        },
      ]);

      res.json(bookingsPerVehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get the average rental duration
  async averageRentalDuration(req, res) {
    try {
      const averageRentalDuration = await Booking.aggregate([
        {
          $group: {
            _id: null,
            totalDuration: { $sum: { $subtract: ["$endDate", "$startDate"] } },
            totalBookings: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            averageDuration: { $divide: ["$totalDuration", "$totalBookings"] },
          },
        },
      ]);

      if (averageRentalDuration.length === 0) {
        return res.json({ message: "No bookings found" });
      }

      res.json({
        averageRentalDuration: averageRentalDuration[0].averageDuration,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new Statistics();
