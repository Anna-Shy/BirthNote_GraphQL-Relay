import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
