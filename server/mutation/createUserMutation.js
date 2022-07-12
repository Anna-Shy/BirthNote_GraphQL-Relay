import userType from "../usersType.js";
import userArgs from "../userArgs.js";

const createUserMutation = {
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

    // db.read();
    // db.data ||= { users: [] };

    // db.data.users.push(newUser);
    // db.write();

    // return db.read();
  },
};

export default createUserMutation;