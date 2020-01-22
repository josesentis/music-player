import gql from "graphql-tag";

const GET_ACTIVE_PLAYER = gql`
  query getActivePlayer {
    activePlayer @client
  }
`;

export default GET_ACTIVE_PLAYER;
