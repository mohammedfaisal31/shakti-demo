const mongoose = require("mongoose");

const tblCommoditiesSchema = new mongoose.Schema({
  Name: String,
  Category: String,
  Units: [String],
  Specifications: [{
    Type: String,
    Value: [String]
  }],
  CreatedAt: Date,
  isActive: Boolean,
  Image: String,
  Perishable: String,
  ProductValidity: Number,
  Duration: Number,
  HSNCode: Number,
  isAlive: Number,
  GST: Number,
  QCParameters: [String]
}, { collection: "tblCommodities" });

const tblCommodities = mongoose.model("tblCommodities", tblCommoditiesSchema);

module.exports = tblCommodities;
