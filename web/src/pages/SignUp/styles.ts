import styled from 'styled-components';

import signUpBackground from '../../assets/signup.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: stretch;
  background: #5636d3;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 50px;
  }

  form {
    width: 340px;
    text-align: center;
    margin-top: 80px;

    h1 {
      font-weight: 500;
      color: #fff;
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  a {
    margin-top: 80px;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      margin-right: 18px;
      color: #ff872c;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat bottom;
  background-size: cover;
`;
