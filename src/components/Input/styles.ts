import styled from 'styled-components';

export const Container = styled.div`
  background: #3f3f3f;

  border-radius: 10px;
  border: 2px solid #3f3f3f;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #a9a9a9;

  & + div {
    margin-top: 50px;
  }

  input {
    color: #f4ede8;
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #a9a9a9;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
