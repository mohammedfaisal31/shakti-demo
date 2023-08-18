const tblStateDistrict = require("../models/tblStateDistrict");

const stateDistrictResolvers = {
  Query: {
    getStateDataByID : async (_, { _id }) => {
      return await tblStateDistrict.findById(_id);
    },
    
  },
};

module.exports = stateDistrictResolvers;
