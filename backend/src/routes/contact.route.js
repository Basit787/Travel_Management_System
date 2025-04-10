const express = require("express");
const contact = require("../controller/contact.controller");
const { authMiddleware } = require("../middleware/middleware");

const contactRoutes = express.Router();

contactRoutes.get("/getcontacts", contact.getContacts);
contactRoutes.post("/addcontact", authMiddleware, contact.addContact);

module.exports = contactRoutes;
