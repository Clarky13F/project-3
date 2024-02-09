// user profile defined here to 
const typeDefs = `

  scalar Date

  type Profile {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    loginUser(_id: ID!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): Auth
    logoutUser(_id: ID!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
