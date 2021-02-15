import { newGame } from "./app";
import { Square } from "./Board/Square";
import { PieceColor } from "./Board/PieceColorEnum";
import { PieceType } from "./Board/PieceTypeEnum";
import { King } from "./Board/King";
import { Pawn } from "./Board/Pawn";


// function addRook(squareNumber, piece) { //przykład
//   var element = document.getElementById(squareNumber);
//   element.classList.add(piece);
// }


// function removeHighlight(squareNumber) {
//   var element = document.getElementById(squareNumber); //trzebaby zmapować naszego square'a do postaci 25 na przykład
//   element.classList.remove("highlight");
// }

// addRook(21, "rook-black")

// addHighlight(22) //działa dodawanie :)
// removeHighlight(22) //działa usuwanie :)
// addHighlight(25)


// // {piecetype.knight
// // piececolor.black} = knight-black


// function addPiece() {
//   var piece = document.getElementById("id"); //trzebaby zmapować naszego piece'a do postaci knight-black na przykład
//   piece.classList.add("figura");
// }

// function removePiece(piece) {
//   var piece = document.getElementById(piece); //trzebaby zmapować naszego piece'a do postaci knight-black na przykład
//   piece.classList.remove(knight - black);
// }

// const squares = [new Square(0, 3), new Square(3, 4)];

function addHighlight(e: any): void {
  const element = e.target;

  const className = e.target.getAttribute("class");
  const whitchSquare = e.target.getAttribute("id");
  const newSquare = mapIdToSquare(whitchSquare);

  if (className.includes("pawn-black")) {
    console.log("turururu");
    // const squares = newGame.getAvailableSquares(new Pawn(PieceColor.Black, PieceType.Pawn, newSquare));
    // for (let i = 0; i < squares.length; i++) {
    //   const square = mapSquareToNumber(squares[i]);
    //   var element = document.getElementById(square);
    //   if (element) {
    //     element.classList.add("highlight");
    //   }
    // }

  } else if (className.includes(".rook-black")) {

  } else if (className.includes(".knight-black")) {

  } else if (className.includes(".bishop-black")) {

  } else if (className.includes(".queen-black")) {

  } else if (className.includes(".king-black")) {

  } else if (className.includes(".pawn-white")) {

  } else if (className.includes(".rook-white")) {

  } else if (className.includes(".knight-white")) {

  } else if (className.includes(".bishop-white")) {

  } else if (className.includes(".queen-white")) {

  } else if (className.includes(".king-whitek")) {

  }
}



function mapSquareToNumber(square: Square): string {
  const row = square.row;
  const column = square.column;
  const number = "" + row + "" + column;
  return number;
}

function mapIdToSquare(id: String): Square {
  const row = +(id[0]);
  const column = +(id[1]);
  return new Square(row, column);
}

const fields = document.querySelectorAll(".field");
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", addHighlight);
}