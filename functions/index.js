const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
var serviceAccount = require('../functions/resources/camperss.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://camper-f60d4.firebaseio.com"
});


const db = admin.firestore();

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
const resolvers = {
  Query: {
    items: () => {
      return db.collection('items').get().then(snapshot => {
        return snapshot.docs.map(doc => {
          console.log(doc.data().content);
          return {
            id: doc.id,
            content: {
              ...doc.data().content
            },
            cartImage: doc.data().cartImage,
            photos: doc.data().photos
          }
        })
      })

    },

    getItemByCategoryId: async (_, args) => {
      let items = [];
      let snapshot = await db.collection("items").get()
      for (let i = 0; i < snapshot.docs.length; i++) {
        if (snapshot.docs[i].data().content.categoryId == args.id) {
          item = {
            id: snapshot.docs[i].id,
            content: {
              ...snapshot.docs[i].data().content
            },
            cartImage: snapshot.docs[i].data().cartImage,
            photos: snapshot.docs[i].data().photos
          }
          items.push(item);
        }
      }
      return items;
    },

    getItemById: async (_, args) => {
      let item = {};
      let snapshot = await db.collection("items").get()
      for (let i = 0; i < snapshot.docs.length; i++) {
        if (snapshot.docs[i].data().content.id == args.id) {
          item = {
            id: snapshot.docs[i].id,
            content: {
              ...snapshot.docs[i].data().content
            },
            photos: snapshot.docs[i].data().photos
          }
          return item;
        }
      }
      return null;
    },
  }
};
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => { server.applyMiddleware({ app, path: '/', cors: true }); });
exports.graphql = functions.https.onRequest(app);