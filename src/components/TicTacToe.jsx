// 0 1 2
// 3 4 5
// 6 7 8

// wininig terms:
// 0 1 2
// 0 3 6
// 0 4 8
// 1 4 7
// 2 5 8
// 3 4 5
// 6 7 8
// 2 4 6


import React, { useEffect, useState } from 'react'
const Square = ({ value, onClick }) => {
  return <button onClick={onClick} className='square'>{value}</button>
}
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (getCurrentSquare) => {
    const copyOfSquares = [...squares];
    if(copyOfSquares[getCurrentSquare]) return; 
    copyOfSquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquares(copyOfSquares);
  }
  const getWinner = ()=>{
    const wininigPattern = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [3,4,5],
      [6,7,8],
      [2,4,6],
    ];
    for(let i=0;i<wininigPattern.length;i++){
      const [a,b,c] = wininigPattern[i];
    }
    if(squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    };
    return null;
  }
  useEffect(()=>{
    getWinner();
  },[isXTurn,squares]);
  // console.log(squares);
  return (
    <div className="container">
      <div className='ttt-container'>
        <div className="row">
          <Square value={squares[0]} onClick={() => { handleClick(0) }} />
          <Square value={squares[1]} onClick={() => { handleClick(1) }} />
          <Square value={squares[2]} onClick={() => { handleClick(2) }} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => { handleClick(3) }} />
          <Square value={squares[4]} onClick={() => { handleClick(4) }} />
          <Square value={squares[5]} onClick={() => { handleClick(5) }} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => { handleClick(6) }} />
          <Square value={squares[7]} onClick={() => { handleClick(7) }} />
          <Square value={squares[8]} onClick={() => { handleClick(8) }} />
        </div>
      </div>
    </div>
  )
}

export default TicTacToe;