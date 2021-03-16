const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    slug: { type: String, required: true },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    requestCount: { type: Number, required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Url", urlSchema);
