const express = require("express");
const user = require("../controller/users.controller");
const {
  authMiddleware,
  validation,
  isAdmin,
} = require("../middleware/middleware");
const { loginSchema, registerSchema } = require("../lib/zod.schema");

const userRoutes = express.Router();

userRoutes.post("/register", validation(registerSchema), user.registerUser);
userRoutes.post("/login", validation(loginSchema), user.login);
userRoutes.get("/getAllUsers", authMiddleware, isAdmin, user.getAllUsers);

module.exports = userRoutes;
