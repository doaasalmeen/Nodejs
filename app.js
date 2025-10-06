const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// Models
const User = require("./models/User");
const Product = require("./models/Product");
// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
// App init
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
//SERVER START
mongoose.connect("MONGO_URI")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => 
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error(err));
