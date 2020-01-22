import React from 'react';

import Slider from 'react-slick';

import * as S from './styles';

export default function Main() {
  const settings = {
    className: 'movies',
    dots: false,
    infinite: false,
    slidesToShow: 1,
    rows: 20,
    slidesPerRow: 5,
  };

  let rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <div key={i}>
        <h3>{i}</h3>
      </div>
    );
  }

  return (
    <S.Container>
      <h1>My list</h1>

      <Slider {...settings}>{rows}</Slider>
    </S.Container>
  );
}
