const { ApolloServer } = require('apollo-server')
// Db
const { Comment } = require('./src/db')

// Schema
const typeDefs = require('./src/schema')

// Resolvers
const resolvers = require('./src/resolvers')

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: { Comment }
})

server.listen({ port: 3333 }).then(({ url }) => {
  console.log(`🚀 Server corriendo en: ${url}`);
});
