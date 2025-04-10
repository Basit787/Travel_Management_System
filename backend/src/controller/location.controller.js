const Location = require("../models/Locations");

exports.getLocation = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.send(locations);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.getAllBooking = async (req, res) => {
  try {
    const bookings = await Location.find();
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.addLocation = async (req, res) => {
  try {
    const newlocation = new Location(req.body);
    await newlocation.save();
    res.send("New Room Added Successfully !");
  } catch (error) {
    return res.status(400).json({ error });
  }
};
