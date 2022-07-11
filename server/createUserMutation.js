const userType = require("./usersType");
const userArgs = require("./userArgs");

module.exports = createUserMutation = {
  type: userType,
  args: userArgs,
  description: "Create a new user",
  resolve: (
    root,
    {
      userId,
      userName,
      dateBirth,
      userAge,
      phoneNumber,
      userPreferences,
      userAbout,
    }
  ) => {
    const newUser = {
      userId,
      userName,
      dateBirth,
      userAge,
      phoneNumber,
      userPreferences,
      userAbout,
    };

    const users = [];
    users.push(newUser);

    return users[0];
  },
};
