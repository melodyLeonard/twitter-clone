import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import thunk from 'redux-thunk';

import reducers from './reducers';



export const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache()
});

const middlewares = [client.middleware(), thunk];

export const store = createStore(
    reducers(client),
    undefined,
    composeWithDevTools(applyMiddleware(...middlewares)),
);