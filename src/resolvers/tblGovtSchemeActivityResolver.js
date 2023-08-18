const tblGovtSchemeActivity = require("../models/tblGovtSchemeActivity");
const mongoose = require("mongoose");

const govtSchemeActivityResolvers = {
  Query: {
    getGovtSchemeActivityById: async (_, { _id }) => {
      return await tblGovtSchemeActivity.findById(_id);
    },
    getAllGovtSchemeActivities: async () => {
      return await tblGovtSchemeActivity.find();
    },
    getNumberOfGovtSchemeActivitiesByUserId: async (_, { UserId }) => {
      try {
        const data = await tblGovtSchemeActivity
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
        console.log(data);
        return data[0].activityCount;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
};

module.exports = govtSchemeActivityResolvers;
