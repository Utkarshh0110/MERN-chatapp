const mongoose = require("mongoose");
const MONGO_URI= "mongodb+srv://utkarshh0110:utkarshh0110@cluster0.fjsm33m.mongodb.net/";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB coneected ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

module.exports = connectDB;
