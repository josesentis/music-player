import gql from "graphql-tag";

const GET_PLAYER_STATUS = gql`
  query getActivePlayer {
    playerState @client
    activePlayer @client
    songIndex @client
    playlistId @client
  }
`;

export default GET_PLAYER_STATUS;
