import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { IoAt, IoLockClosedOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Presentation, Content, AnimationContainer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Presentation>
      <h1>Livraria Virtual Reaction</h1>

      <div>
        <h2>Para uma nova geração de leitores</h2>
      </div>
    </Presentation>
    <Content>
      <AnimationContainer>
        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={IoAt} placeholder="E-mail" />

          <Input
            name="password"
            icon={IoLockClosedOutline}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/signup">
          <FiLogIn />
          Cadastrar
        </Link>
      </AnimationContainer>
    </Content>
  </Container>
);
export default SignIn;
