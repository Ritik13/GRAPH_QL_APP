const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const axios = require('axios');
const { users, companies } = require('./Mock/User');



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
                company: Company!
            }
            
            type Company {
                id: String!
                name: String
                employes: [User]
            }

            input CreateUserInput {
                name: String!
                age: String!
                companyId: String!
            }

            type Mutation {
                createUser(input: CreateUserInput!): User
            }

            type Query {
                getUsers: [User]
                getCompany: [Company]
            }
        `,
        resolvers: {
            Query: {
                getUsers: () => users,
                getCompany: () => companies,
            },
            Mutation: {
                createUser: (_, { input }) => {
                    const newUser = {
                        id: String(users.length + 1),
                        name: input.name,
                        age: input.age,
                        company: {
                            id: input.companyId,
                            name: "Example Company", // You might fetch this from another source
                            employes: [],
                        },
                    };

                    users.push(newUser);

                    return newUser;
                },
            },
        },
    });

    app.use(express.json());
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(3000, () => {
        console.info('Server running on http://localhost:3000/graphql');
    });
}

startServer();
