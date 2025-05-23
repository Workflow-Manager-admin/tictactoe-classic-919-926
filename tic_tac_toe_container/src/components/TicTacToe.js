import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

/**
 * TicTacToe Classic Game Component
 * 
 * A classic two-player strategy game where players take turns marking X or O on a 3x3 grid,
 * aiming to get three of their marks in a row, column, or diagonal.
 */
// PUBLIC_INTERFACE
function TicTacToe() {
  // Game board state (3x3 grid)
  const [board, setBoard] = useState(Array(9).fill(null));
  // Current player ('X' starts the game)
  const [xIsNext, setXIsNext] = useState(true);
  // Game status message
  const [status, setStatus] = useState('');
  // Game over state
  const [gameOver, setGameOver] = useState(false);

  // Calculate winner and update game status
  useEffect(() => {
    const winner = calculateWinner(board);
    
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setGameOver(true);
    } else if (board.every(square => square !== null)) {
      setStatus("Game ended in a draw!");
      setGameOver(true);
    } else {
      setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [board, xIsNext]);

  /**
   * Handle a player's move
   * @param {number} index - The index of the square that was clicked
   */
  const handleClick = (index) => {
    // Return early if game is over or square is already filled
    if (gameOver || board[index]) {
      return;
    }

    // Create a copy of the current board
    const newBoard = [...board];
    // Set the square to the current player's mark
    newBoard[index] = xIsNext ? 'X' : 'O';
    // Update the board state
    setBoard(newBoard);
    // Switch to the next player
    setXIsNext(!xIsNext);
  };

  /**
   * Reset the game to its initial state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
    setStatus('Next player: X');
  };

  /**
   * Render a square in the game board
   * @param {number} index - The index of the square in the board array
   * @returns {JSX.Element} - The rendered square
   */
  const renderSquare = (index) => {
    return (
      <button 
        className="square" 
        onClick={() => handleClick(index)}
        disabled={gameOver || board[index] !== null}
      >
        {board[index]}
      </button>
    );
  };

  /**
   * Calculate the winner by checking all possible winning combinations
   * @param {Array} squares - The current game board
   * @returns {string|null} - The winner ('X' or 'O') or null if no winner
   */
  const calculateWinner = (squares) => {
    // All possible winning combinations (rows, columns, diagonals)
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal from top-left
      [2, 4, 6], // diagonal from top-right
    ];

    // Check each winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner yet
  };

  // Game component UI
  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      
      <div className="status">{status}</div>
      
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      
      <button className="btn reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
