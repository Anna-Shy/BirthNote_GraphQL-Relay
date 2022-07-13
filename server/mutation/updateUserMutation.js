import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import lodash from "lodash";

import userType from "../usersType.js";
import userArgs from "../userArgs.js";

// let db = new Low("../db.json");
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
// const file = join(__dirname, '../../src/person.json');
const file = join(__dirname, "../db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const updateUserMutation = {
  type: userType,
  args: userArgs,
  description: "Update a user",
  resolve: async (
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
    await db.read();

    db.data.users.find((user) => user.userId === userId).userName = userName;
    db.data.users.find((user) => user.userId === userId).dateBirth = dateBirth;
    db.data.users.find((user) => user.userId === userId).userAge = userAge;
    // db.data.users.find((user) => user.userId === userId).userName = userName;
    // db.data.users.find((user) => user.userId === userId).userName = userName;
    // db.data.users.find((user) => user.userId === userId).userName = userName;

    db.write();

    return db.data.users.find((user) => user.userId === userId);
  },
};

export default updateUserMutation;
