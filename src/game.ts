import { newGame } from "./app";
import { Square } from "./Board/Square";
import { PieceColor } from "./Board/PieceColorEnum";
import { PieceType } from "./Board/PieceTypeEnum";
import { King } from "./Board/King";

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


function addHighlight() {
  const squares = newGame.getAvailableSquares(new King(PieceColor.White, PieceType.King, new Square(5, 2)));
  for (let i = 0; i < squares.length; i++) {
    const square = "" + mapSquareToNumber(squares[i])
    var element = document.getElementById(square);
    if(element) {
      element.classList.add("highlight");
    }
    
  console.log("tralala");
  }
}



function mapSquareToNumber(square: Square): number {
  const row = square.row;
  const column = square.column;
  const number = "" + row + "" + column;
  return +number;
}

const fields = document.querySelectorAll(".field-container");
console.log(fields);
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", addHighlight);
}