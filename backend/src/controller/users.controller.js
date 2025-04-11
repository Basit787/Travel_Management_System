import {
  ComparePassword,
  CreateToken,
  HashedPassword,
} from "../helpers/helpers.js";
import User from "../models/user.js";
import { userConstants } from "../constants/user.constants.js";

export const registerUser = async (req, res) => {
  const { password, email, ...data } = req.body;
  try {
    const getUser = await User.findOne({ email });
    if (getUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await HashedPassword(password);
    const user = new User({
      ...data,
      email: email,
      password: hashedPassword,
    });
    const saveUser = await user.save();
    res.status(201).json({
      message: "User register successfully",
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to save user", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getUser = await User.findOne({ email }).select(userConstants);
    if (!getUser) return res.status(404).json({ message: "Email not found" });

    const validPassword = await ComparePassword(password, getUser.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid Password" });

    const payload = {
      id: getUser.id,
      user: getUser.name,
      email: getUser.email,
    };

    const token = await CreateToken(payload);

    if (!token)
      return res.status(404).json({ message: "Failed to create token" });

    return res.status(200).json({ data: getUser, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json({
      status: 200,
      message: "Successfully fetched all users",
      data: users.length ? users : "no users added",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
