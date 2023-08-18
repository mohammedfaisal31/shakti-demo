const tblUserProfileResolver = require('./tblUserProfileResolver');
const tblUserBankResolver = require('./tblUserBankResolver');
const tblUserAddressResolver = require('./tblUserAddressResolver');
const tblStateDistrictResolver = require('./tblStateDistrictResolver');
const tblCommoditiesResolver = require('./tblCommoditiesResolver');
const tblGovtSchemeActivityResolver = require('./tblGovtSchemeActivityResolver');
const tblLanguagesResolver = require('./tblLanguagesResolver');
const tblLikesDislikesResolver = require('./tblLikesDislikesResolver');
const tblNewsActivityResolver = require('./tblNewsActivityResolver');

const combinedResolvers = {
  ...tblUserProfileResolver,
  ...tblUserBankResolver,
  ...tblUserAddressResolver,
  ...tblStateDistrictResolver,
  ...tblCommoditiesResolver,
  ...tblGovtSchemeActivityResolver,
  ...tblLanguagesResolver,
  ...tblLikesDislikesResolver,
  ...tblNewsActivityResolver,
};

module.exports = combinedResolvers;
