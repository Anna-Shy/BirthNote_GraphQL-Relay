import userType from "../usersType.js";
import userArgs from "../userArgs.js";

const updateUserMutation = {
  type: userType,
  args: userArgs,
  description: "Update a user",
  resolve: ({
    userId,
    userName,
    dateBirth,
    userAge,
    phoneNumber,
    userPreferences,
    userAbout,
  }) => {
    let newUser = users.find((user) => user.userId === userId);
    newUser.userName = userName;
    newUser.dateBirth = dateBirth;
    newUser.userAge = userAge;
    newUser.phoneNumber = phoneNumber;
    newUser.userPreferences = userPreferences;
    newUser.userAbout = userAbout;

    return newUser;
  },
};

export default updateUserMutation;