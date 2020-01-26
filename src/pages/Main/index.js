import React from 'react';

import MySlider from '../../components/Slider';

import * as S from './styles';

export default function Main() {
  return (
    <S.Container>
      <MySlider title="Miha lista" />

      <MySlider title="Em alta" />

      <MySlider title="Filmes para toda a família" />

      <MySlider title="Assistir novamente" />

      <MySlider title="Populares na Netflix" />
    </S.Container>
  );
}
