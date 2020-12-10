import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  table {
    width: 100%;
    border-spacing: 0 8px;
    margin-top: 60px;

    thead {
      td {
        color: #969cb2;
        padding: 20px;

        span {
          display: flex;
          align-items: center;
        }
      }
    }

    tbody {
      td {
        background: #fff;
        color: #363f5f;
        padding: 20px;

        &.income {
          color: #12a454;
        }
        &.outcome {
          color: #e83f5b;
        }
      }

      td:first-child {
        border-radius: 8px 0 0 8px;
      }

      td:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: -110px;

  div {
    width: 352px;
    height: 136px;
    background: #fff;
    border-radius: 8px;
    padding: 20px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #363f5f;
    }

    & + div {
      margin-left: 32px;
    }

    & + div + div {
      background: #ff872c;

      p {
        color: #fff;
      }

      h1 {
        color: #fff;
      }
    }

    h1 {
      color: #363f5f;
      font-size: 36px;
      font-weight: 500;
    }
  }
`;
