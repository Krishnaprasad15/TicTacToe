import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const initialState = Array(9).fill(null);
  const [state, setState] = useState(initialState);
  const [isXturn, setXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[b] === state[c])
        return state[a];
      if(!state.includes(null) && state[a]!=null) return 'No One'; 
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] != null) return;
    const copyArr = [...state];
    copyArr[index] = isXturn ? "X" : "O";
    setState(copyArr);
    setXturn(!isXturn);
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <div
          className="winner"
          style={{
            // textAlign:'center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "80px",
            fontSize: "50px",
          }}
        >
            {isWinner} Won the Game !!!{" "}
          <button
            style={{
              margin: "20px",
              padding: "10px",
              width: "100px",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={()=> setState(initialState)}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
