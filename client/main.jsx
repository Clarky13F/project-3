import { ReactDOM } from 'react-dom/client';
import { App } from './App.jsx';
import { db } from './client/server/config/connection.js';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { styles } from './client/src/2fly.css';
import { User } = require('./models/User.js');
import { mongoose } from 'mongoose';
import { connection } from 'mongodb://127.0.0.1:27017/developersApplications';
import { User } from './server/models/User';
import { React } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
uri: 'https://flyby-router-demo.herokuapp.com/',
cache: new InMemoryCache(),
});

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/project-3-starter-code');
console.log(client.connection === mongoose.connection)
true

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>,
);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project-3-starter-code'
);
const { connect, db } = require('mongoose');
connect('mongodb://127.0.0.1:27017/developersApplications');
module.exports = mongoose.connection;
main().catch(error => console.log(error));
if (process.env.NODE_ENV === 'production') {
    App.use(express.static(path.join(__dirname, '../client/dist')));

    App.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        error: <Page404 />,
        children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        ],
    },
    ]);
    
const client = new ApolloClient({
    uri: 'mongodb://atlas-sql-65c1bcc7075b3c6b19797c62-unhpq.a.query.mongodb.net/Interactive:Live?ssl=true&authSource=admin',
    cache: new InMemoryCache(),
});


// call with the query string (wrapped in the gql template literal)
// const client = ...

client
.query({
    query: gql`
    query GetLocations {
        locations {
        id
        name
        description
        photo
        }
    }
    `,
});
.then((result) => console.log(result));

async function main() {
    await mongoose.connect('mongodb://jive.hive:L0gin4u@127.0.0.1:27017/test');
};
module.exports = connection;
ReactDOM.createRoot(document.getElementById('root')).render(
<App />
);