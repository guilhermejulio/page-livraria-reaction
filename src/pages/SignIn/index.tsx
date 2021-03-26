import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Presentation, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Presentation>
      <h1>Livraria Virtual Reaction</h1>

      <div>
        <h2>Para uma nova geração de leitores</h2>
      </div>
    </Presentation>
    <Content>
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </form>

      <a href="login">
        <FiLogIn />
        Cadastrar
      </a>
    </Content>
  </Container>
);
export default SignIn;
