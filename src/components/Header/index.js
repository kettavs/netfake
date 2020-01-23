import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

import * as S from './styles';

import logo from '../../assets/logo.png';

class Header extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <S.HeaderSize>
        <S.Header>
          <S.Div>
            <S.Logo src={logo} alt="" />

            <S.Nav>
              <S.NavLink>
                <Link to="/" className={pathname === '/' ? 'active' : null}>
                  Início
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link
                  to="/series"
                  className={pathname === '/series' ? 'active' : null}
                >
                  Séries
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link
                  to="/movies"
                  className={pathname === '/movies' ? 'active' : null}
                >
                  Filmes
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link
                  to="/latest"
                  className={pathname === '/latest' ? 'active' : null}
                >
                  Mais recentes
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link
                  to="/my-list"
                  className={pathname === '/my-list' ? 'active' : null}
                >
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
}

export default withRouter(Header);
