import { useState } from "react"

function Square({value,SquareClick}){

  return (
  <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
  onClick={SquareClick}
  >{value}</button>
  )
}
let cnt=0;
export default function Board(){
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [xIsNext,setXisNext] = useState(true);
  const [isDraw,setIsDraw] = useState(false);
  
  
  console.log(squares);
  const  handleClick = (i)=>{
    console.log("SquareClick");
    const curSquares = squares.slice();
    if(curSquares[i] || calculateTheWinner(squares))return;
    if(xIsNext){
      curSquares[i] = 'X';
      setXisNext(false);
    }else{
      curSquares[i] = 'O';
      setXisNext(true);
    }
    setSquares(curSquares);
    cnt++;
    if(cnt==9){
      setIsDraw(true);

    }

  }

  const winner=calculateTheWinner(squares);
  let status ;

  if(winner){
    status=`Winner is ${winner}`;
  } else if(isDraw){
    status=`GAME OVER! Result : DRAW`
  }
  else {
    status=`Next Play ${xIsNext ? "X":"O"}`;
  }

    return (
    <>
    <div>{status}</div>
    <div className='flex'>
     <Square value={squares[0]} SquareClick={()=>handleClick(0)}></Square>
     <Square value={squares[1]} SquareClick={()=>handleClick(1)}></Square>
     <Square value={squares[2]} SquareClick={()=>handleClick(2)}></Square>
    </div>
    <div className='flex'>
     <Square value={squares[3]} SquareClick={()=>handleClick(3)}></Square>
     <Square value={squares[4]} SquareClick={()=>handleClick(4)}></Square>
     <Square value={squares[5]} SquareClick={()=>handleClick(5)}></Square>
    </div>
    <div className='flex'>
     <Square value={squares[6]} SquareClick={()=>handleClick(6)}></Square>
     <Square value={squares[7]} SquareClick={()=>handleClick(7)}></Square>
     <Square value={squares[8]} SquareClick={()=>handleClick(8)}></Square>
    </div>

     
    </>
    )
}

function calculateTheWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
