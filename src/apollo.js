import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const resolvers = {};
const cache = new InMemoryCache();

cache.writeData({
  data: {
    playerState: 'stop',
    activePlayer: true,
    muted: false,
    repeat: false,
    volume: 30,
    songIndex: 3,
    playlistId: '90s',
    randomOrder: []
  }
});

const client = new ApolloClient({
  cache,
  resolvers
});

export { client, cache };
