const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res)=> {
    res.send("API IS RUNNING");
});

app.get("/api/chat/:id", (req,res)=> {

})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("SERVER STARTED ON PORT 5000"));