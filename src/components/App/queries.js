import gql from "graphql-tag";

const GET_PLAYER_STATE = gql`
  query IsPlayerActive {
    playerState @client
  }
`;

export default GET_PLAYER_STATE;
