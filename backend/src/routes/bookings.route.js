const express = require("express");
const booking = require("../controller/booking.controller.js");
const { authMiddleware } = require("../middleware/middleware.js");

const bookingRoutes = express.Router();

bookingRoutes.post("/bookplace", authMiddleware, booking.bookplace);
bookingRoutes.get(
  "/getBookingsByUserId/:id",
  authMiddleware,
  booking.getBookById,
);

module.exports = bookingRoutes;
