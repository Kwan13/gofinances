import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

// styles
import { Container } from './styles';

interface TooltipPros {
  title: string;
}

const Tooltip: React.FC<TooltipPros> = ({ title }) => {
  return (
    <Container>
      <FiAlertCircle size={20} color="#FA5858" />
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
