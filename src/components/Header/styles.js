import styled from 'styled-components';

export const HeaderSize = styled.div`
  height: 70px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: 68px;
  margin: 0 auto;
  font-size: 14px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 25px;
  margin-right: 25px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.li`
  list-style: none;
  margin-left: 20px;

  a {
    text-decoration: none;
    cursor: pointer;
    transition: color 400ms;
    color: #e5e5e5;

    &:hover {
      color: #b3b3b3;
    }

    &.active {
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & :not(:last-child) {
    margin-right: 22px;
  }

  svg {
    color: #fff;
    font-size: 20px;
  }
`;
