import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://rparihar0303_db_user:ZgwblEBlN9rEJIfY@cluster0.bim3m4s.mongodb.net/?appName=Cluster0')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Schema
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", MessageSchema);

// ✅ Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "r.parihar0303@gmail.com",
    pass: "Rohit@4567"
  }
});

// ✅ API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to DB
    await Message.create({ name, email, message });

    // 2️⃣ Send Email
    await transporter.sendMail({
      from: email,
      to: "r.parihar0303@gmail.com",
      subject: `New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    // 3️⃣ WhatsApp link
    const whatsappLink = `https://wa.me/918871785707?text=${encodeURIComponent(
      `New Contact\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    res.json({ success: true, whatsappLink });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
