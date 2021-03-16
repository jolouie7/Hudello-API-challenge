const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

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

// User input longURL
app.post("/", async (req, res) => {
  // TODO: Check if the longUrl is acutally a valid URL
  // Check if the longUrl is already in the db, if it is do something. If not create a new shortUrl
  const longUrl = req.body.longUrl;
  const slug = nanoid()
  const url = await Url.findOne({longUrl: longUrl});
  if (url) {
    console.log("This url was already created")
    // inc requestCount
  } else {
    // create new shortURL
    const newUrl = await Url.create({
      slug: slug,
      longUrl: longUrl,
      shortUrl: `http://localhost:5000/${slug}`, // Replace with domain
      requestCount: 0, // Inc the requestCount after initializing
    });
    res.json({newUrl: newUrl});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});