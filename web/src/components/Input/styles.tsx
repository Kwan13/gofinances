import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 20px;
  color: #969cb2;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 18px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #363f5f;

    &::placeholder {
      color: #969cb2;
    }
  }
`;
