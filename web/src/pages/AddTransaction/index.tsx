import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

// styles
import { Container } from './styles';

interface FormData {
  title: string;
  price: string;
  category: string;
}

const AddTransaction: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        title: Yup.string().required('Campo obrigatório.'),
        price: Yup.string().required('Campo obrigatório.'),
        type: Yup.string().equals(
          ['income', 'outcome'],
          'Informe "income" ou "outcome".',
        ),
        category: Yup.string().required('Campo obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={{ type: 'income' }}
        >
          <h1>Nova Transação</h1>
          <Input name="title" placeholder="Titulo" />
          <Input name="price" placeholder="Preço" />
          <Input name="type" placeholder="Tipo" />
          <Input name="category" placeholder="Categoria" />

          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTransaction;
