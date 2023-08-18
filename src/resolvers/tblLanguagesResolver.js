const tblLanguages = require("../models/tblLanguages");

const languagesResolvers = {
  Query: {
    getLanguagesById: async (_, { _id }) => {
      return await tblLanguages.findById(_id);
    },
    getAllLanguages: async () => {
      return await tblLanguages.find();
    },
  },
};

module.exports = languagesResolvers;
