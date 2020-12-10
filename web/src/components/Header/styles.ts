import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLarge: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: 92px;
  background: #5636d3;

  ${props =>
    props.isLarge &&
    css`
      height: 238px;
    `}

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 30px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      list-style: none;
      display: flex;

      li {
        & + li {
          margin-left: 32px;
        }

        a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, '#fff')};
          }
        }

        button {
          background: transparent;
          border: 0;
          cursor: pointer;

          svg {
            color: #ff872c;
            transition: color 0.2s;

            &:hover {
              color: ${shade(0.2, '#ff872c')};
            }
          }
        }
      }
    }
  }
`;
