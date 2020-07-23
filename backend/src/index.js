import express from 'express';
const { ApolloServer, gql } = require('apollo-server-express');
import constants from './config/constants';
import './config/db';
import auth from './config//middleware';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocksUpData from './mocks';

const app = express();

app.use(auth);

app.use(express.json());




const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user,
  }),
});

server.applyMiddleware({ app });

const PORT = constants.PORT;

try {
  // mocksUpData();
  app.listen({ port: PORT }, () => {
    try {
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
      );
    } catch (err) {
      console.error(err);
    }
  });
} catch (err) {
  console.error(err);
}
