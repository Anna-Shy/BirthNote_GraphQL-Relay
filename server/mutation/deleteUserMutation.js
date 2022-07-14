import { GraphQLID } from "graphql";
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

import userType from "../usersType.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../../src/person.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

const deleteUserMutation = {
  type: userType,
  args: { userId: { type: GraphQLID } },
  description: "Delete a user",
  resolve: async (root, { userId }) => {
    await db.read();

    const userIndex = db.data.users.findIndex((user) => user.userId === userId);

    if (userIndex === -1) {
      throw new Error("User not found!");
    }

    const deletedUsers = db.data.users.splice(userIndex, 1);
    db.write();

    return deletedUsers;
  },
};

export default deleteUserMutation;
