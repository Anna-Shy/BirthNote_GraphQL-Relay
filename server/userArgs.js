import { GraphQLList, GraphQLID, GraphQLString } from "graphql";

const userArgs = {
  apiType: { type: GraphQLString },
  userId: { type: GraphQLID },
  userName: { type: GraphQLString },
  dateBirth: { type: GraphQLString },
  phoneNumber: { type: GraphQLString },
  userPreferences: { type: new GraphQLList(GraphQLString) },
  userAbout: { type: GraphQLString },
};

export default userArgs;
