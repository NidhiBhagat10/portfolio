/* backend entry point */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// middleware 
app.use(cors());
app.use(express.json());

//API routes

app.get("/api", (req, res) => {
    res.send("Welcome to the Portfolio API");
})

// connect to mongoDB

mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("MongoDB Connected"))
    .catch((err)=> console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server running on http://localhost:${PORT}`));