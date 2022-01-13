const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type colorOptions {
    name: String
    color: String
  }
  type details {
    explaination: String
    properties: [String]
  }
  type content {
    id: ID!
    categoryId: Int
    type: String
    name: String
    price: Float
    colorOptions: [colorOptions]
    sizes: [String]
    details: details
  }
  type Item {
    id: ID!
    content:content
    cartImage: String
    photos: [String]
  }
  type Query {
    items: [Item]
    getItemById(id: ID!): Item
    getItemByCategoryId(id: Int!): [Item]
  }
`;

module.exports = typeDefs;