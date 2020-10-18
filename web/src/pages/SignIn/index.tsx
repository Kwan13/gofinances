import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// utils
import getValidationError from '../../utils/getValidationErrors';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

// styles
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido.')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const error = getValidationError(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoFinances" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu login</h1>
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
