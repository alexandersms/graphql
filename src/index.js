import { GraphQLServer } from 'graphql-yoga'

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// Définir le schema de GraphQL
// Notre contrat ce que nous offrons sur notre serveur GraphQL
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

// Implémentation de notre contrat 
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello test ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running on localhost:4000`))
