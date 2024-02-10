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

  type Post {
    _id: ID!
    concertName: String!
    message: String!
    image: String!
    user: User!
  }

  type Query {
    me: User
    getAllPosts: [Post!]!
  }

  type Mutation {
<<<<<<< HEAD
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    createPost(concertName: String!, message: String!, image: String!): Post
=======
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    loginUser(_id: ID!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): Auth
    logoutUser(_id: ID!, email: String!, password: String!): Auth
>>>>>>> 605a7808179066a959656531774ca08982ccd00a
  }
`;

module.exports = typeDefs;
