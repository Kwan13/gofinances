import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff872c;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  margin-top: 24px;
  transition: background 0.2s;
  font-weight: 500;

  &:hover {
    background: ${shade(0.2, '#FF872C')};
  }
`;
