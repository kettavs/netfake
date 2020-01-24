import React from 'react';

import * as S from './styles';
import img from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg';

export default function CardMovie() {
  return (
    <S.Card>
      <img src={img} alt="" className="little" />
      <img src={img2} alt="" className="medium" />
      <div className="content">
        <div className="title">
          {/* play  */}
          <p>O Mundo Sombrio de Sabrina</p>
          <p>P1:E1 "Capitulo um: É tempo de Halloween"</p>
        </div>
        {/* <div className="avaliacao">avaliação</div> */}
        {/* seta */}
      </div>
    </S.Card>
  );
}
