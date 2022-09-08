const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    todos: [Todo]
    todo(_id: ID!): Todo
  }

  type Todo {
    _id: ID
    title: String!
    desc: String!
  }

  type Mutation {
    createTodo(input: createInput!): Todo
    deleteTodo(_id: String!): String
    updateTodo(_id: ID!, input: updateInput): Todo
  }

  input createInput {
    title: String!
    desc: String!
  }

  input updateInput {
    title: String
    desc: String
  }
`;

module.exports = typeDefs;
