const tblUserProfile = require("../models/tblUserProfile");

const tblUserProfileResolver = {
  Query: {
    users: async () => {
      try {
        const users = await tblUserProfile.find();
        return users;
      } catch (error) {
        throw new Error("User data not found");
      }
    },
    getUserDataById: async (parent, args) => {
      try {
        const userData = await tblUserProfile.findById(args._id);

        return userData;
      } catch (error) {
        throw new Error("User data not found");
      }
    },
  },
};

module.exports = tblUserProfileResolver;
