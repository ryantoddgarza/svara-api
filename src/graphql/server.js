require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { name: APP_NAME } = require('../../package.json');

async function startApolloServer() {
  const port = process.env.APP_PORT || 5000;
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.send(APP_NAME);
  });

  await mongoose.connect(process.env.MONGO_URI);
  console.log(`[${APP_NAME}] MongoDB connected`);

  app.listen(port, () => {
    console.log(`[${APP_NAME}] listening on port ${port}`);
  });
}

startApolloServer();
