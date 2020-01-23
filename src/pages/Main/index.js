import React from 'react';

import Slider from 'react-slick';

import CardMovie from '../../components/CardMovie';
import * as S from './styles';

export default function Main() {
  const settings = {
    className: 'movies',
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  let rows = [];
  for (let i = 0; i < 20; i++) {
    rows.push(
      <div key={i}>
        <CardMovie />
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
