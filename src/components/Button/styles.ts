import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #cbf1f1;
  height: 56px;
  border-radius: 15px;
  border: 0;
  padding: 0 16px;
  width: 70%;
  color: #20385a;
  font-weight: 500;
  margin-top: 38px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#cbf1f1')};
  }
`;
