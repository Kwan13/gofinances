import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../context/AuthContext';

// styles
import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  large?: boolean;
}

const Header: React.FC<HeaderProps> = ({ large = false }) => {
  const { signOut } = useAuth();

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
          <li>
            <button type="button" onClick={signOut}>
              <FiPower size={20} />
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
