import "dotenv/config";
import { ApolloServer } from "apollo-server";
import './database';

import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: async ({req}) => {
    return {token: req.headers.authorization || null};
  },
  playground: process.env.NODE_ENV === "development"
});

export default server;