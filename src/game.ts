import { newGame } from "./app";
import { Square } from "./Board/Square";
import { PieceColor } from "./Board/PieceColorEnum";
import { PieceType } from "./Board/PieceTypeEnum";
import { King } from "./Board/King";
import { Pawn } from "./Board/Pawn";
import { Piece } from "./Board/Piece";
import { Game } from "./Game/Game"
import { Board } from "./Board/Board";
import { Rook } from "./Board/Rook";
// board.updatePosition(move);

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

// var elements = document.getElementsByClassName("classname");

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };
// Array.from(elements).forEach(function(element) {
//   element.addEventListener('click', myFunction);
// });

function gameLoop() {
  let board: Board = new Board();
  board.create();
  let game: Game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
  //   while (game.isEnded()) { //pętla działa dopóki isEnded nie równa się false

  //     const fields = document.querySelectorAll(".field"); //kliknięcie na kwadrat w szachownicy
  //     for (let i = 0; i < fields.length; i++) {
  //       fields[i].addEventListener("click", function (e: any): void {
  //         const isPieceOnSquare = e.target.getAttribute("id");

  //         if () { //sprawdzenie czy w tym square stoi pionek aktualnego gracza

  //           // podświetl kliknięte pole

  //           // podświetl pola na które może stanąć wybrana bierka

  //           // kliknięcie na kwadrat w szachownicy

  //           if ("czy ten kwadrat należy do pól podświetlonych ?") {  // czy ten kwadrat należy do pól podświetlonych? sprawdzenie metody w stylu isAvailableSquare

  //             // wywołaj metodę removePiece() ze starego kwadratu oraz wywołaj metodę addPiece() na nowym kwadracie

  //             if ("condition") { //sprawdź warunki końca gry (mat, pat, zasada 50, zadada trzykrotne) // ten if jest niepotrzbemy bo to samo sprawdzamy w warunu pętli while

  //               //jesli koniec gry

  //             } else {
  //               //jeśli nie  nic nie rób
  //             }

  //           } else {
  //             //jeśli nie  nic nie rób
  //           }
  //         } else {
  //           //jeśli nie  nic nie rób
  //         }
  //       }
  //     }
  //   }



  function addHighlight(e: any): void {
    console.log("addhi");
    const whichSquare = e.target.getAttribute("id");
    const newSquare = mapIdToSquare(whichSquare);
    const piecesOnBoard = game.board.piecesOnBoard;
    for (let i = 0; i < piecesOnBoard.length; i++) {
      for (let j = 0; j < piecesOnBoard.length; j++) {
        if (piecesOnBoard[i][j].placeAt == newSquare) {
          highlightSquaresForPiece(piecesOnBoard[i][j]);
        }
      }
    }
  }

  function highlightSquaresForPiece(piece: Piece) {
    const squares = newGame.getAvailableSquares(piece);
    for (let i = 0; i < squares.length; i++) {
      const square = mapSquareToNumber(squares[i]);
      var element = document.getElementById(square);
      if (element) {
        element.classList.add("highlight");
      }
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

}