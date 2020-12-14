import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 56px;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 20px;
  color: #969cb2;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff872c;
    `}
`;

export const SelectReact = styled(ReactSelect)`
  flex: 1;
`;
