import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  large?: boolean;
}

const Header: React.FC<HeaderProps> = ({ large = false }) => {
  return (
    <Container isLarge={large}>
      <div>
        <img src={logoImg} alt="GoFinances" />
        <ul>
          <li>
            <Link to="/dashboard">Transações</Link>
          </li>
          <li>
            <Link to="/add">Nova transação</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
