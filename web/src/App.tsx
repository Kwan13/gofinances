import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// routes
import Routes from './routes';

// styles
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
