import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const resolvers = {};
const cache = new InMemoryCache();

cache.writeData({
  data: {
    playerState: 'stop',
    activePlayer: true,
  }
});

const client = new ApolloClient({
  cache,
  resolvers
});

export { client };
