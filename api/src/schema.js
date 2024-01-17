const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }

    type Pet {
        id: String!
        createdAt: Int!
        name: String!
        type: String!
        img: String!
    }

    input GetPetsInput {
        type: String!
    }

    input GetPetInput {
        name: String!
    }

    type Query {
        GetUser: User
        GetPets(input: GetPetsInput!): [Pet]!
        GetPet(input: GetPetInput!): Pet
    }
`;

module.exports = typeDefs
