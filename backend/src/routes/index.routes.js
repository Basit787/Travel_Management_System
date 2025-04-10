const express = require("express");
const bookingRoutes = require("./bookings.route");
const contactRoutes = require("./contact.route");
const locationRoutes = require("./location.route");
const placeRoutes = require("./place.route");
const userRoutes = require("./users.route");

const routes = express.Router();

routes.use("/booking", bookingRoutes);
routes.use("/contacts", contactRoutes);
routes.use("/location", locationRoutes);
routes.use("/place", placeRoutes);
routes.use("/users", userRoutes);

module.exports = routes;
