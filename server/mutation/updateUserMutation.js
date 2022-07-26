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
    { id, userName, dateBirth, phoneNumber, userPreferences, userAbout }
  ) => {
    await db.read();
    dateBirth = new Date(dateBirth).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    let updateUser = db.data.users.find((user) => user.id === id);

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
