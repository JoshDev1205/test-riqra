const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    getAllComments: [Comment!]
  }

  type Comment {
    id: Int!
    content: String!
    published: Boolean!
  }

  type Mutation {
    createComment(content: String!): Comment!
    deleteComment(id: ID!) : Boolean!
  }

`

module.exports = typeDefs