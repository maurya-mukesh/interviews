const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const bookingController = require("../controller/booking");
const customerController = require("../controller/customer");
const statisticsController = require("../controller/statistics");
const vehicleController = require("../controller/vehicle");
const verifyToken = require("../middleware/verifyToken");
const joiValidation = require("../middleware/Joi");
const authorizeAdmin = require("../middleware/verifyAdmin");

// Auth API
router.post("/auth/user/login", authController.login);
router.post("/auth/user/register", joiValidation, authController.register);
router.get("/auth/users-profile/:id", verifyToken, authController.userProfile);

// Booking API
router.post("/bookings", verifyToken, bookingController.booking);
router.get(
  "/customers/:customerId/bookings",
  verifyToken,
  bookingController.customersBookings
);
router.get(
  "/vehicles/:vehicleId/bookings",
  verifyToken,
  bookingController.vehiclesBookings
);

// Customers API : Public API
router.post("/customers", customerController.newCustomers);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

// Statistics API  :: Public API
router.get(
  "/statistics/most-popular-vehicle",
  statisticsController.mostPopularVehicle
);
router.get(
  "/statistics/bookings-per-vehicle",
  statisticsController.bookingsPerVehicle
);
router.get(
  "/statistics/average-rental-duration",
  statisticsController.averageRentalDuration
);

// Vehicles API
router.post(
  "/vehicles/new-vehicle",
  verifyToken,
  authorizeAdmin,
  vehicleController.newVehicles
);
router.put(
  "/vehicles/update/:id",
  verifyToken,
  authorizeAdmin,
  vehicleController.updateVehicles
);
router.delete(
  "/vehicles/delete/:id",
  verifyToken,
  authorizeAdmin,
  vehicleController.deleteVehicles
);
router.get(
  "/vehicles",
  verifyToken,
  authorizeAdmin,
  vehicleController.searchVehicles
);
router.post(
  "/vehicles/maintenance/:vehicleId",
  verifyToken,
  authorizeAdmin,
  vehicleController.underMaintenance
);

module.exports = router;
