const mongoose = require('mongoose');

const DistrictDetails = new mongoose.Schema({
  name: String,
});

const tblStateDistrictSchema = new mongoose.Schema({
  State: String,
  Districts: [DistrictDetails],
  GST: String,
  StateCode: Number,
});

const tblStateDistrict = mongoose.model('tblStateDistrict', tblStateDistrictSchema);

module.exports = tblStateDistrict;
