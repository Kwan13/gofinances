import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// componentes
import Header from '../../components/Header';

// styles
import { Content, CardContainer } from './styles';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header large />
      <Content>
        <CardContainer>
          <div>
            <header>
              <p>Entradas</p>
              <img src={entradasImg} alt="Entradas" />
            </header>
            <h1>R$ 1.000,00</h1>
          </div>

          <div>
            <header>
              <p>Saídas</p>
              <img src={saidasImg} alt="Saídas" />
            </header>
            <h1>R$ 1.000,00</h1>
          </div>

          <div>
            <header>
              <p>Total</p>
              <img src={totalImg} alt="Total" />
            </header>
            <h1>R$ 1.000,00</h1>
          </div>
        </CardContainer>

        <table>
          <thead>
            <tr>
              <td>
                <span>
                  Titulo
                  <FiChevronDown />
                </span>
              </td>
              <td>
                <span>
                  Preço
                  <FiChevronDown />
                </span>
              </td>
              <td>
                <span>
                  Categoria
                  <FiChevronDown />
                </span>
              </td>
              <td>
                <span>
                  Data
                  <FiChevronUp color="#FF872C" />
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Playstation 5</td>
              <td>R$ 5.000,00</td>
              <td>Jogos</td>
              <td>10/05/1996</td>
            </tr>

            <tr>
              <td>Playstation 5</td>
              <td>R$ 5.000,00</td>
              <td>Jogos</td>
              <td>10/05/1996</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </>
  );
};

export default Dashboard;
