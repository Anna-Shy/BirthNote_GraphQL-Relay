const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} = require("graphql");
const userType = require("./usersType");

const data = require("../src/person.json");

module.exports = schema = new GraphQLSchema({
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
      createUser: require("./createUserMutation"),
      updateUser: require("./updateUserMutation"),
      deleteUser: require("./deleteUserMutation"),
    }),
  }),
});
