const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const resolvers = require("./resolver");
const typeDefs = require("./schema-type");
require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`server is running at ${url}`);
});
