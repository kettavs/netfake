import React from 'react';
import { FaPlay, FaPlus, FaChevronDown } from 'react-icons/fa';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import * as S from './styles';
import img2 from '../../assets/img2.jpg';

export default function CardMovie({ img }) {
  return (
    <S.Card>
      <S.Banner src={img} />

      <S.Content bgImg={img2}>
        <S.Overlay>
          <S.Overview>
            <FaPlay />
            <S.Title>O Mundo Sombrio de Sabrina</S.Title>
            <S.Presentation>
              P1:E1 "Capitulo um: É tempo de Halloween"
            </S.Presentation>
          </S.Overview>

          <S.Actions>
            <AiOutlineDislike />
            <AiOutlineLike />
            <FaPlus />
          </S.Actions>
        </S.Overlay>

        <S.Chevron>
          <FaChevronDown />
        </S.Chevron>
      </S.Content>
    </S.Card>
  );
}
