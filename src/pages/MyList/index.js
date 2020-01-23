import React from 'react';

import Slider from 'react-slick';

import CardMovie from '../../components/CardMovie';

import * as S from './styles';

export default function Main() {
  const settings = {
    className: 'movies',
    dots: false,
    infinite: false,
    slidesToShow: 1,
    rows: 100,
    slidesPerRow: 6,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesPerRow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesPerRow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesPerRow: 3,
        },
      },
    ],
  };

  let rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <div key={i}>
        <CardMovie />
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
