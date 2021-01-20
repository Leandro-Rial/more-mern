import React from 'react';
import {DataProvider} from './GlobalState';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/headers/Header';
import MainPages from './components/mainPages/Pages';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <MainPages />
      </Router>
    </DataProvider>
  );
}

export default App;
