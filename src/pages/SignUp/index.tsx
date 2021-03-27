import React from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import { IoAt, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Presentation, Content, AnimationContainer } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Presentation />
    <Content>
      <AnimationContainer>
        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={IoPersonOutline} placeholder="Nome" />

          <Input name="email" icon={IoAt} placeholder="E-mail" />

          <Input
            name="password"
            icon={IoLockClosedOutline}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/">
          <FiArrowDownLeft />
          Voltar para logon
        </Link>
      </AnimationContainer>
    </Content>
  </Container>
);
export default SignUp;
