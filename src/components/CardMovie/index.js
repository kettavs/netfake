import React from 'react';

import * as S from './styles';
import img from '../../assets/img.jpg';

export default function CardMovie() {
  return (
    <S.Card>
      <img src={img} alt="" />
    </S.Card>
  );
}
