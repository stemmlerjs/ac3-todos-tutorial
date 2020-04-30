import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { cache } from './cache';

const client = new ApolloClient({
  uri: `http://localhost:4000`,
  cache,
});

// Example of an inline query
// client
//   .query({
//     query: gql`
//       {
//         todos {
//           id
//           text
//           completed
//         }
//       }
//     `,
//   })
//   .then((res) => {
//     console.log(res);
//   });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
