const { GraphQLObjectType } = require("graphql");
const userArgs = require("./userArgs");

module.exports = userType = new GraphQLObjectType({
  name: "User",
  fields: () => userArgs,
});
