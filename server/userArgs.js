const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

module.exports = userArgs = {
  apiType: { type: GraphQLString },
  userId: { type: GraphQLID },
  userName: { type: GraphQLString },
  dateBirth: { type: GraphQLString },
  userAge: { type: GraphQLInt },
  phoneNumber: { type: GraphQLString },
  userPreferences: { type: new GraphQLList(GraphQLString) },
  userAbout: { type: GraphQLString },
};
