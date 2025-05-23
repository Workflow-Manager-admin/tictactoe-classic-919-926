import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <div>Tic Tac Toe Classic</div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-wrapper" style={{ paddingTop: '100px' }}>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;