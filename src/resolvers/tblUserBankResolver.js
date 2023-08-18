const tblUserBank = require("../models/tblUserBank");

const userBankResolvers = {
  Query: {
    getUserBankDetailsByID: async (_, { _id }) => {
      return await tblUserBank.findById(_id);
    },
    
  },
};

module.exports = userBankResolvers;
