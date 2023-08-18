const tblNewsActivity = require("../models/tblNewsActivity");
const mongoose = require("mongoose");
const newsActivityResolvers = {
  Query: {
    getNewsActivityById: async (_, { _id }) => {
      return await tblNewsActivity.findById(_id);
    },
    getAllNewsActivities: async () => {
      return await tblNewsActivity.find();
    },
    
    getNumberOfNewsActivitiesByUserId: async (_, { UserId }) => {
      try {
        const data = await tblNewsActivity
          .aggregate([
            {
              $match: {
                UserId: new mongoose.Types.ObjectId(UserId),
              },
            },
            {
              $project: {
                activityCount: { $size: "$Activity" },
              },
            },
          ])
          .exec();

        return data[0].activityCount;
      } catch (err) {
        console.log(err);
        return err;
      }
    },

    
  },
};

module.exports = newsActivityResolvers;
