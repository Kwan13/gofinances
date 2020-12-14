import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

// utils
import getValidationError from '../../utils/getValidationErrors';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

// styles
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string()
            .email('Digite um e-mail válido.')
            .required('E-mail obrigatório.'),
          password: Yup.string().min(6, 'No minímo 6 caracteres.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const error = getValidationError(err);
        formRef.current?.setErrors(error);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoFinances" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
