import React from 'react';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <Home />
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
