// // bringing in the required import from 'react-router-dom':
// import React from 'react';
// import "./App.css";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// // import { ApolloProvider } from '@apollo/react-hooks';
// // import Outlet from 'react-router-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Auth, Footer, Header, Page }  from './src/components/UI/Auth.jsx';

// // import { useQuery, gql } from '@apollo/client';
// // Import everything needed to use the `useQuery` hook [on line abv]

// const client = new ApolloClient({
//     uri: '/graphql',
//     cache:new InMemoryCache(),
// });

// // const App = () => <portfolio />;
// // functional component:
// function App() {
//     // The Outlet component will conditionally swap between the different pages according to the URL
//     return (
//     <ApolloProvider client={client}>
//     <div className="flex-column justify-flex-start min-100-vh">
//         <Header />
//         <div className="container">
//         <Profile />
//         </div>
//         <Footer />
//     </div>
//     </ApolloProvider>
//     );
// }

// // for location data on posts
// function DisplayLocations() {
//     const { loading, error, data } = useQuery(GET_LOCATIONS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error : {error.message}</p>;

//     return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//         <h3>{name}</h3>
//         <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//         <br />
//         <b>About this location:</b>
//         <p>{description}</p>
//         <br />
//     </div>
//     ));
// }

// export default function App() {
//     return (
//     <div>
//         <h2>My first Apollo app 🚀</h2>
//         <br/>
//         <DisplayLocations />
//     </div>
//     );
// }

// export default function App() {
// return (
//     <div>
//     <h2>Live:Interactive</h2>
//     </div>
// );
// }

// // export default App;