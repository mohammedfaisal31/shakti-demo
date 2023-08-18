const fs = require("fs");
const path = require("path");

const tblUserProfileSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblUserProfile.graphql"),
  "utf8"
);
const tblUserBankSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblUserBank.graphql"),
  "utf8"
);
const tblUserAddressSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblUserAddress.graphql"),
  "utf8"
);
const tblStateDistrictSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblStateDistrict.graphql"),
  "utf8"
);

const tblCommoditiesSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblCommodities.graphql"),
  "utf8"
);
const tblGovtSchemeActivitySchemaFile = fs.readFileSync(
  path.join(__dirname, "tblGovtSchemeActivity.graphql"),
  "utf8"
);
const tblLanguagesSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblLanguages.graphql"),
  "utf8"
);
const tblLikesDislikesSchemaFile = fs.readFileSync(
  path.join(__dirname, "tblLikesDislikes.graphql"),
  "utf8"
);
const tblNewsActivitySchemaFile = fs.readFileSync(
  path.join(__dirname, "tblNewsActivity.graphql"),
  "utf8"
);

const typeDefs = `
  ${tblUserProfileSchemaFile}
  ${tblUserBankSchemaFile}
  ${tblUserAddressSchemaFile}
  ${tblStateDistrictSchemaFile}
  ${tblCommoditiesSchemaFile}
  ${tblGovtSchemeActivitySchemaFile}
  ${tblLanguagesSchemaFile}
  ${tblLikesDislikesSchemaFile}
  ${tblNewsActivitySchemaFile}
`;

module.exports = typeDefs;
