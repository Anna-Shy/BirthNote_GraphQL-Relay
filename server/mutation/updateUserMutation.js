import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

import userType from "../usersType.js";
import userArgs from "../userArgs.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "../../src/person.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const updateUserMutation = {
  type: userType,
  args: userArgs,
  description: "Update a user",
  resolve: async (
    root,
    { userId, userName, dateBirth, phoneNumber, userPreferences, userAbout }
  ) => {
    await db.read();

    let updateUser = db.data.users.find((user) => user.userId === userId);

    updateUser.userName = userName || updateUser.userName;
    updateUser.dateBirth = dateBirth || updateUser.dateBirth;
    updateUser.phoneNumber = phoneNumber || updateUser.phoneNumber;
    updateUser.userPreferences = userPreferences || updateUser.userPreferences;
    updateUser.userAbout = userAbout || updateUser.userAbout;
    db.write();
    return updateUser;
  },
};

export default updateUserMutation;
