import { GraphQLList, GraphQLID } from "graphql";
import { join, dirname } from "path";
import { LowSync, JSONFileSync } from "lowdb";
import { fileURLToPath } from "url";

import * as low from "lowdb";
// import * as FileSync from 'lowdb/adapters/FileSync';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
// const file = join(__dirname, '../../src/person.json');
const filePath = join(__dirname, "../db.json");
// const adapter = new JSONFile(file);
// const db = new Low(adapter);
const adapter = new JSONFileSync(filePath);
const db = new LowSync(adapter);

const deleteUserMutation = {
  type: GraphQLID,
  args: { userId: { type: GraphQLID } },
  description: "Delete a user",
  resolve: async (root, { userId }) => {
    await db.read();

    // const userIndex = db.data.users.findIndex((user) => user.userId === userId);
    // if (userIndex === -1) {
    //   throw new Error("User not found!");
    // }

    const deleted = db.data.users.remove((user) => user.userId === userId);
    db.write();
    deleted.value();

    return null;
  },
};

export default deleteUserMutation;
