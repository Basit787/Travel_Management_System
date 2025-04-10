const express = require("express");
const place = require("../controller/place.controller");
const { authMiddleware } = require("../middleware/middleware");

const placeRoutes = express.Router();

placeRoutes.get("/getallplaces", place.getAllPlaces);
placeRoutes.get("/getPlaceById/:id", place.getPlaceById);
placeRoutes.get("/getPlaceByIdFood", place.getPlaceByIdFood);
placeRoutes.post("/addroom", authMiddleware, place.addRoom);

module.exports = placeRoutes;
