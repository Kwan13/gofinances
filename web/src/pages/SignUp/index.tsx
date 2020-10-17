import React from 'react';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

// styles
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoFinances" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input type="password" name="email" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Cadastrar</Button>
        </form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
    </Container>
  );
}

export default SignUp;
