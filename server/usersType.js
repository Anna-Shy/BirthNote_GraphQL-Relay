import { GraphQLObjectType } from "graphql";
import userArgs from "./userArgs.js";

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => userArgs,
});

export default userType;
