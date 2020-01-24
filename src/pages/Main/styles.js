import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4%;

  .movies {
    margin-bottom: 40px;

    .slick-track {
      &:hover .slick-slide {
        transform: translate3d(-60px, 0, 0);
      }

      .slick-slide {
        transition: transform 0.3s;

        &:first-child {
          transform-origin: left;
        }

        &:hover {
          transform: scale(1.5) translate3d(0, 0, 0);

          & ~ div {
            transform: translate3d(60px, 0, 0);
          }

          &:first-child {
            transform: scale(1.5) translate3d(-2px, 0, 0);

            & ~ div {
              transform: translate3d(120px, 0, 0);
            }
          }
        }
      }
    }
  }
`;
