const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const errorHandler = (error) => {
    console.error('Error:', error.message || error);
    throw error;
};
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        errorHandler(error);
    }
}


async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
            type User {
                id: ID!
                name: String!
                age: String!
                company : Company!
            }
            type Company {
                id: String!
                name : String
                employes : [User]
            }
            type Todo {
                id: ID!
                title: String!
                completed: Boolean
                user: User
            }
            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getSingleUser(id: ID!): User
            }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => fetchData(`${BASE_URL}/users/${todo.id}`)
            },
            Query: {
                getTodos: async () => fetchData(`${BASE_URL}/todos`),
                getAllUsers: async () => fetchData(`${BASE_URL}/users`),
                getSingleUser: async (parent, { id }) => fetchData(`${BASE_URL}/users/${id}`)
            }
        }
    });

    app.use(express.json()); 
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(5000, () => {
        console.info('Server running on http://localhost:5000/graphql');
    });
}

startServer();
