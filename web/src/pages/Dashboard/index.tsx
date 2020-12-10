import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// componentes
import Header from '../../components/Header';

// styles
import { Content, CardContainer } from './styles';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { useAuth } from '../../context/AuthContext';

interface Transaction {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
  formattedValue: string;
  formattedDate: string;
  category: string;
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const { token } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function getTransactions(): Promise<void> {
      const response = await api.get('/transactions', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const transactionsFormatted = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-BR',
          ),
        }),
      );

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);
    }

    getTransactions();
  }, [token]);

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
            <h1>{balance.income}</h1>
          </div>

          <div>
            <header>
              <p>Saídas</p>
              <img src={saidasImg} alt="Saídas" />
            </header>
            <h1>{balance.outcome}</h1>
          </div>

          <div>
            <header>
              <p>Total</p>
              <img src={totalImg} alt="Total" />
            </header>
            <h1>{balance.total}</h1>
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
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'outcome' && ' - '}
                  {transaction.formattedValue}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.formattedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </>
  );
};

export default Dashboard;
