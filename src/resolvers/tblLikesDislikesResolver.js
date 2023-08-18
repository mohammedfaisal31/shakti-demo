const tblLikesDislikes = require("../models/tblLikesDislikes");

const likesDislikesResolvers = {
  Query: {
    getLikesDislikesById: async (_, { _id }) => {
      return await tblLikesDislikes.findById(_id);
    },
    getAllLikesDislikes: async () => {
      return await tblLikesDislikes.find();
    },
  },
};

module.exports = likesDislikesResolvers;
