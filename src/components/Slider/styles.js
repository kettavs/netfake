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
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: 0;
  margin: 0 -2px;
  transition: all 0.6s ease-in-out;

  &:hover {
    & > .item:not(:hover) {
      transform: translateX(50%);
      /* background-color: #ff0; */
    }

    & > .item:not(:hover) {
      &:nth-of-type(${props => props.slidesToShow}n + 0) {
        transform: translateX(0%);
        /* background-color: #715; */
      }
    }
  }

  .item {
    height: 100%;
    flex: 0 0 calc(100% / ${props => props.slidesToShow});
    margin: 0px;
    padding: 2px;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.1s;
    transform-origin: left;

    &:nth-of-type(${props => props.slidesToShow}n + 1) {
      transform-origin: right;
      /* background-color: #715; */
    }

    &:nth-of-type(${props => props.slidesToShow}n + 0) {
      transform-origin: left;
      /* background-color: #0909; */
    }

    &:hover {
      transform: scale(1.5) !important;
      /* background-color: #f00; */

      & ~ .item {
        transform: translateX(-25%);
        transform: translateX(0%);
        /* background-color: #0f0; */
      }

      &:nth-of-type(${props => props.slidesToShow}n + 1) ~ .item {
        transform: translateX(-50%);
        /* transform: translateX(-25%); */
        /* background-color: #0fd0f0; */
      }

      &:nth-of-type(${props => props.slidesToShow}n + 0) ~ .item {
        transform: translateX(0);
        /* background-color: #84e; */
      }
    }
  }
`;
