import gql from "graphql-tag";

const GET_PLAYER_STATE = gql`
  query getPlayerState {
    playerState @client
    activePlayer @client
    muted @client
    repeat @client
    volume @client
    songIndex @client
    playlistId @client
  }
`;

export default GET_PLAYER_STATE;
