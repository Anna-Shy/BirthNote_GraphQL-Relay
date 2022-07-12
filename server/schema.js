import { GraphQLSchema, GraphQLObjectType, GraphQLList } from "graphql";
import data from "../src/person.json" assert { "type": "json" };

import userType from "./usersType.js";
import createUserMutation from "./mutation/createUserMutation.js";
import updateUserMutation from "./mutation/updateUserMutation.js";
import deleteUserMutation from "./mutation/deleteUserMutation.js";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
      users: {
        type: new GraphQLList(userType),
        resolve: () => [
          {
            apiType: "user",
            userId: data[1].userId,
            userName: data[1].userName,
            dateBirth: data[1].dateBirth,
            userAge: data[1].userAge,
            phoneNumber: data[1].phoneNumber,
            userPreferences: data[1].userPreferences,
            userAbout: data[1].userAbout,
          },
        ],
      },
    }),
  }),

  mutation: new GraphQLObjectType({
    name: "Mutations",
    fields: () => ({
      createUser: createUserMutation,
      updateUser: updateUserMutation,
      deleteUser: deleteUserMutation,
    }),
  }),
});

export default schema;
