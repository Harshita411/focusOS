const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "focusOS API running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("focusOS running on PORT 5000");
});
