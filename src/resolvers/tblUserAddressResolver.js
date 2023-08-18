const tblUserAddress = require("../models/tblUserAddress");

const userAddressResolvers = {
  Query: {
    getUserAddressByID : async (_, { _id }) => {
      return await tblUserAddress.findById(_id);
    },
    
  },
};

module.exports = userAddressResolvers;
