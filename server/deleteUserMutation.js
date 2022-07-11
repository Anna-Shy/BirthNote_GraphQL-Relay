const { GraphQLList, GraphQLID } = require("graphql");

module.exports = deleteUserMutation = {
  type: new GraphQLList(GraphQLID),
  description: "Delete a user",
  resolve: ({ userId }) => {
    const userIndex = users.findIndex((user) => user.userId === userId);
    if (userIndex === -1) {
      throw new Error("User not found!");
    }
    const deletedUsers = users.splice(userIndex, 1);

    return deletedUsers[0];
  },
};
