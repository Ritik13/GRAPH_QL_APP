const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server')
const bodyParser = require('body-parser');
const { expressMiddleware } = require('@apollo/server/express4');
const { default: axios } = require('axios');
async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type User {
            id: ID!
            name : String!
            email : String!
        }
        type Todo {
            id: ID!
            title : String!
            completed : Boolean
            user: User
        }

        type Query {
            getTodos : [Todo]
            getAllUsers : [User]
            getSingleUser(id: ID!) : User
        }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => {
                    try {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`);
                        const data = response.data;
                        return data; // Return the fetched data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw error;
                    }

                }
            },
            Query: {
                getTodos: async () => {
                    try {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                        const data = response.data;
                        return data; // Return the fetched data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw error;
                    }
                },
                getAllUsers: async () => {
                    try {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                        const data = response.data;
                        return data; // Return the fetched data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw error;
                    }
                },
                getSingleUser: async (parent, { id }) => {
                    try {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                        const data = response.data;
                        return data; // Return the fetched data
                    } catch (error) {
                        console.error('Error fetching todos:', error);
                        throw error;
                    }
                }
            }
        }
    });
    app.use(bodyParser.json());
    app.use(cors());
    await server.start()

    app.use('/graphql', expressMiddleware(server));

    app.listen(5000, () => {
        console.info('server runnning')
    })
}

startServer()