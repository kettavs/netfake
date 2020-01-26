import styled from 'styled-components';

export const Card = styled.div.attrs({
  className: 'card',
})`
  height: auto;
  display: flex;
  overflow: hidden;
  /* width: calc(100% - 6px); */
  /* margin: 40px 0; */
  /* position: relative; */

  img {
    width: 100%;

    &.little {
      /* position: absolute; */
    }
  }

  /*.little,
  .medium {
    transition: opacity 0.6s;
  }

  .little {
    opacity: 1;
  }

  .medium {
    opacity: 0;
  }

  .content {
    position: absolute;
    bottom: 0;
    opacity: 0;
    padding: 5px 10px;
  }

  &:hover {
    .little,
    .medium {
      transition: opacity 0.9s;
    }

    .little {
      opacity: 0;
    }

    .medium {
      opacity: 1;
    }

    .content {
      opacity: 1;
    }
  } */
`;
