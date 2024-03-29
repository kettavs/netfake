import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
