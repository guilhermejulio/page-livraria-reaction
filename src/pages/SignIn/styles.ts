import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Presentation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  place-content: center;
  align-items: center;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

  h1,
  h2 {
    margin: 40px 0;
    text-align: center;
  }

  h1 {
    font-size: 70px;
  }

  h2 {
    font-size: 20px;
    color: #20385a;
    line-height: 50px;
  }

  div {
    background-color: #cbf1f1;
    width: 500px;
  }

  @media (max-width: 868px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 868px) {
    max-width: 100%;
  }
`;

const appearFromDown = keyframes`
  from{
    opacity: 0;
    transform: translateY(50px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromDown} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 58px;
      font-size: 30px;
    }
  }

  a {
    color: #cbf1f1;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#cbf1f1')};
    }
  }
`;
