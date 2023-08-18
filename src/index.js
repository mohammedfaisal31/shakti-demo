const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./schemas/schemas");
const resolvers = require("./resolvers/resolvers");
require("./db-config");



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } =  startStandaloneServer(server, {
  listen: { port: 4000 },
}); 

console.log(`🚀  Server ready at: ${url}`);
