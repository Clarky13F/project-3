const express = require('express');
const { ApolloServer } = require('@apollo/server');
const path = require('path');
const db = require('./config/connection.js');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();
const { typeDefs, resolvers } = require('./schemas');


const PORT = process.env.port || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// we set up our server to serve the built React front-end application that is in the `../client/dist` directory.
// we set up wildcard route on our server that will serve the front end whenever a request for a non-API route is received.

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project-3-starter-code'
// );
// var db = mongoose.createConnection('mongodb://127.0.0.1:27017/project-3-starter-code');
// console.log(client.connection === mongoose.connection)
// true

// connect('mongodb://127.0.0.1:27017/developersApplications');
// module.exports = mongoose.connection;
// main().catch(error => console.log(error));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));

//     app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     })
// };
// route:
// app.use('/graphql, expressMiddleware(server));

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//   });
// });

// exports = function(req,res) {
//   var mongoose = require('mongoose');
//   mongoose.createConnection('mongodb://localhost/cj');
//   var db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error:'));
//   console.log('a')
//   db.once('open',function(){
//       console.log('b')
//   })
// };
// 

// Create a new instance of server with the GraphQL schema
const startApolloServer = async () => {
  await server.start()
const { expressMiddleware } = require('@apollo/server/express4');
// app.use(express.urlencoded({ extended: true }));
app.use (express.json(__dirname, '../client/dist/index.html')), app.use('/graphql', expressMiddleware(server, {
  context: authMiddleware
}))
};

app.get('/all-users', async (req, res) =>{
  try {
    // using model in route to find all documents that are instances of that model
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
  });

  // app.use(express.urlencoded({ extended: false }));
  // app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  };

// app.put('find-one-update/:user', async (req, res) => {
//   try {
//     const user = await generateKey.findOneAndUpdate({
//       name: 'User'
//     }, {
//       name: req.params.user
//     });
    
//   res.json(user);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error);
//   }
// });

// Call the async function to start the server
startApolloServer();

// mongodb://atlas-sql-65c1bcc7075b3c6b19797c62-unhpq.a.query.mongodb.net/Interactive:Live?ssl=true&authSource=admin
// mongodb://localhost:3000/