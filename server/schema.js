import { GraphQLSchema, GraphQLObjectType, GraphQLList } from "graphql";
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

import userType from "./usersType.js";
import createUserMutation from "./mutation/createUserMutation.js";
import updateUserMutation from "./mutation/updateUserMutation.js";
import deleteUserMutation from "./mutation/deleteUserMutation.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../../src/person.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
      users: {
        type: new GraphQLList(userType),
        resolve: () => db.data.users,
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
