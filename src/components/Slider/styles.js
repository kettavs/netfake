import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;

  .title {
    padding: 0 4% 5px;

    font-size: 22px;
    line-height: 22px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  padding: 0 4%;
`;

export const Slider = styled.div.attrs({
  className: 'slider',
})`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0 -2px;
  transition: all 0.6s ease-in-out;

  .item {
    height: 100%;
    display: block;
    flex: 0 0 calc(100% / ${props => props.slidesToShow});
    margin: 0px;
    padding: 2px;
    transition: transform 0.4s ease-in-out;
    transition-delay: 0.5s;

    &:nth-of-type(5n + 1) {
      transform-origin: left;
    }

    /* &:nth-of-type(5n + 0) {
      transform-origin: right;
    } */

    &:hover {
      transform: scale(1.5) !important;
      /* background: blue; */

      & ~ .item {
        transform: translateX(25%);
      }

      &:nth-of-type(1) ~ div {
        transform: translateX(50%);
      }

      /* &:nth-of-type(5n + 0) ~ div {
        transform: translateX(0);
      } */
    }
  }

  &:hover {
    .item {
      transform: translateX(-25%);
    }

    &.item:nth-of-type(5n + 0 > 5n) {
      transform: translateX(-50%);
    }

    /* .item {
      transform: translateX(-50%);
    } */
  }
`;
