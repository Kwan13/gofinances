import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

// styles
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

export default Input;
