import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import { printSchema } from 'graphql';

const app = express();

app.get('/schema', function (req, res) {
  graphql(schema, introspectionQuery).then(function (result) {
      res.contentType('application/json');
      res.send(JSON.stringify(result, null, 2));
  });
});

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
