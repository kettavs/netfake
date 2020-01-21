import React from 'react';

import Slider from 'react-slick';

import * as S from './styles';

export default function Main() {
  const settings = {
    className: 'movies',
    dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <S.Container>
      <h1>Main</h1>

      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
      </Slider>
    </S.Container>
  );
}
