import React from 'react';

import Slider from 'react-slick';

import * as S from './styles';

export default function Main() {
  const settings = {
    className: 'movies',
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  let rows = [];
  for (let i = 0; i < 20; i++) {
    rows.push(
      <div key={i}>
        <h3>{i}</h3>
      </div>
    );
  }

  return (
    <S.Container>
      <h1>Main</h1>
      <Slider {...settings}>{rows}</Slider>

      <h1>Main</h1>
      <Slider {...settings}>{rows}</Slider>
    </S.Container>
  );
}
