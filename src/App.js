import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://ruhul-tf.hasura.app/v1/graphql",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "Rb7ac6aq3tIhEopM3Avc25GJFxViO4Eb2iNyweXZBIqiVgNGmjNYCu65c9ae0IJB",
    },
  }),
  cache: new InMemoryCache(),
}); 

function App() {
  return (
    <ApolloProvider client={client}>
      <div data-theme="winter">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
