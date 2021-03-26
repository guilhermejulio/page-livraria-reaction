import styled from 'styled-components';
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
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 600px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 58px;
      font-size: 30px;
    }

    input {
      background: #3f3f3f;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #3f3f3f;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #a9a9a9;
      }

      & + input {
        margin-top: 50px;
      }
    }

    button {
      background: #cbf1f1;
      height: 56px;
      border-radius: 15px;
      border: 0;
      padding: 0 16px;
      width: 70%;
      color: #20385a;
      font-weight: 500;
      margin-top: 58px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#cbf1f1')};
      }
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

  @media (max-width: 868px) {
    max-width: 100%;
  }
`;
