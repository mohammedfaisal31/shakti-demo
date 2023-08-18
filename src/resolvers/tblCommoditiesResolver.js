const tblCommodities = require("../models/tblCommodities");

const commoditiesResolvers = {
  Query: {
    getCommodityById: async (_, { _id }) => {
      return await tblCommodities.findById(_id);
    },
    getAllCommodities: async () => {
      return await tblCommodities.find();
    },
  },
};

module.exports = commoditiesResolvers;
