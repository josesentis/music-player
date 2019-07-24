import styled from 'styled-components';

const SongInfoStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .song-info {
    &__header {
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        border-radius: 50%;
        width: 100%;
      }
    }

    &__singer {}
    &__author {}
  }
`;

export default SongInfoStyled;
