import express from "express";
import { graphqlHTTP } from "express-graphql";
import { printSchema } from 'graphql';
import cors from 'cors';
import localhost from 'https-localhost';
import https from 'node:https';

import schema from "./schema.js";

const httpsLocalhost = localhost();
const certs = await httpsLocalhost.getCerts();

const app = express();

app.options('*', cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get('/schema', function (req, res) {
  const directiveSchema = `
    directive @defer(if: Boolean, label: String) on FRAGMENT_SPREAD | INLINE_FRAGMENT
    directive @stream(if: Boolean, label: String, initialCount: Int!) on FIELD
  `;
  res.contentType('text/plain');
  res.send([printSchema(schema), directiveSchema].join('\n'));
});


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

https.createServer(certs, app).listen(4000, () => { console.log("Server is running at port 4000"); });
