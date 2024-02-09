// we use Mongoose to organize and validate our data. Mongoose is an object document, mapper or Otm library for MongoDB
// So a mongoose model represents a Mongodb collection and provides a way to interact with it by defining a schema that describes the structure of the document.
// The model allows you to perform operations on the collection. making it easier to work with Mongodb in your application.
// The schema is a blueprint that describes the structure and attributes of the documents in the collection.
// Schema defines the fields, their types, validation, rules, default values and other properties. Once you have a schema, you can create a model using mongoose.

const { connect, connection } = require('mongoose');
const { mongo, mongoose } = require ();
const db = mongoose.connection;

connect('mongodb://127.0.0.1:27017/developersApplications');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test')
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://atlas-sql-65c1bcc7075b3c6b19797c62-unhpq.a.query.mongodb.net/Interactive:Live?ssl=true&authSource=admin');
var mongodb = 'mongodb://127.0.0.1:27017/developersApplications';
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;

db.plugin('connected', function() {
    console.log('Mongoose default connection success');
});

db.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

module.exports = connection;
// module.exports = mongoose.connect;
