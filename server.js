const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");

const Url = require("./models/urls");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// apply middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// setup mongodb connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
app.get("/", async (req, res) => {
  //find all urls in the Url table in our db
  const urls = await Url.find()
  res.json(urls)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});