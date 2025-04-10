const express = require("express");
const location = require("../controller/location.controller");
const { authMiddleware } = require("../middleware/middleware");

const locationRoutes = express.Router();

locationRoutes.get("/getlocations", location.getLocation);
locationRoutes.get("/getAllBookings", authMiddleware, location.getAllBooking);
locationRoutes.post("/addlocation", authMiddleware, location.addLocation);

module.exports = locationRoutes;
