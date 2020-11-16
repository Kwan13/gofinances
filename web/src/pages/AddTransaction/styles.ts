import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;

  form {
    h1 {
      color: #ff872c;
      margin-bottom: 18px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 520px;
    height: 450px;
    padding: 20px;
    border-radius: 8px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;
