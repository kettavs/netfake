import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

import CardMovie from '../CardMovie';

import * as S from './styles';

export default function Slider({ type, onClick }) {
  return (
    <S.Button className={type} onClick={onClick}>
      <span>
        <FaAngleUp />
      </span>
    </S.Button>
  );
}
