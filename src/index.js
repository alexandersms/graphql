import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";

// Définir le schema de GraphQL
// Notre contrat ce que nous offrons sur notre serveur GraphQL
const typeDefs = "src/schema/schema.graphql";

// Implémentation de notre contrat
const resolvers = {
  Query
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running on localhost:4000`));
