const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
const app = express();
app.use(cors());
dotenv.config();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER RUNNING ON PORT 5000"));
