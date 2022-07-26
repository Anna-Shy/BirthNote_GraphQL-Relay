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

await db.read();
db.data ||= { users: [] };

const createUserMutation = {
  type: userType,
  args: userArgs,
  description: "Create a new user",
  resolve: (
    root,
    { userName, dateBirth, phoneNumber, userPreferences, userAbout }
  ) => {
    const newUser = {
      apiType: "user",
      id: Date.now().toString(),
      userName,
      dateBirth: new Date(dateBirth).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      phoneNumber,
      userPreferences,
      userAbout,
    };
    db.data.users.push(newUser);

    db.write();

    const userDB = db.data.users.find((user) => user.id === newUser.id);

    return userDB;
  },
};

export default createUserMutation;
