const Room = require("../models/Places");
const Booking = require("../models/booking");
const user = require("../models/user");
const Place = require("../models/Places.js");
const stripe = require("stripe")(
  "sk_test_51MjMdXSB50ekGdkVCW6wBg1dO6C9cOra5SqH6ZEXMCRjRkB6TUXdpoxf4kXmxCPsD6e5WiLjsJdszpYzLREF7j0G00BWpCLydQ",
);

exports.bookplace = async (req, res) => {
  const { places, userid, fromDate, toDate, totalAmount, totalDays, token } =
    req.body;

  try {
    const newBooking = new Booking({
      places: places.name,
      placesid: places._id,
      userid,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transactionId: "1234",
    });

    const booking = await newBooking.save();

    const place = await Place.findOneAndUpdate(
      { _id: places._id },
      {
        $push: {
          currentbookings: {
            bookingid: booking._id,
            fromDate,
            toDate,
            userid,
            status: "booked",
          },
        },
      },
      { new: true },
    );

    if (!place) {
      return res.status(404).json({ error: "Place not found." });
    }

    res.send("Room Booked Successfully");
  } catch (error) {
    console.error("Error booking room:", error);
    return res.status(400).json({ error: "Failed to book room." });
  }
};

exports.getBookById = async (req, res) => {
  const userid = req.params.id;
  try {
    const bookings = await Booking.find({ userid: userid });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
