import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

import * as S from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <S.HeaderSize>
      <S.Header>
        <S.Div>
          <S.Logo src={logo} alt="" />

          <S.Nav>
            <S.NavLink>
              <Link to="/">Início</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to="/">Séries</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to="/">Filmes</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to="/latest">Mais recentes</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to="/my-list" className="active">
                Minha lista
              </Link>
            </S.NavLink>
          </S.Nav>
        </S.Div>

        <S.Div>
          <S.Actions>
            <FaSearch />
            <FaBell />
            <FaUser />
          </S.Actions>
        </S.Div>
      </S.Header>
    </S.HeaderSize>
  );
}
