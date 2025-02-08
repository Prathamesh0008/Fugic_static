require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Create the directory if it doesn't exist
}

// Set up storage for Multer (to temporarily save the uploaded files)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({ storage: storage });

// POST route to handle order submission
app.post("/api/submit-order", async (req, res) => {
  const { companyName, contactPerson, email, phoneNumber, address, cartItems } = req.body;

  if (!companyName || !contactPerson || !email || !phoneNumber || !address || !cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "All fields are required and cart must have items." });
  }

  const formattedCartItems = cartItems.map(item => ({
    productId: item.productId,
    productName: item.productName,
    quantity: item.quantity || 1,
    price: item.price || "Price not available",
  }));

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Order Received",
      text: `New order placed by ${contactPerson}.\n\nCompany Details:\nCompany Name: ${companyName}\nPhone Number: ${phoneNumber}\nAddress: ${address}\nCustomer Email: ${email}\n\nProducts:\n${formattedCartItems.map(item => `
      Product ID: ${item.productId}
      Product Name: ${item.productName}
      Quantity: ${item.quantity}
      Price: ${item.price}`).join('\n')}`,
    };

    await transporter.sendMail(adminMailOptions);

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Order Confirmation",
      text: `Thank you for your order, ${contactPerson}!\n\nWe have received your order details:\nCompany Name: ${companyName}\nPhone Number: ${phoneNumber}\nAddress: ${address}\n\nProducts:\n${formattedCartItems.map(item => `
      Product Name: ${item.productName}
      Quantity: ${item.quantity}
      Price: ${item.price}`).join('\n')}`,
    };

    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ message: "Order submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit order" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
