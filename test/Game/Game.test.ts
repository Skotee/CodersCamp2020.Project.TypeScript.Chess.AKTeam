import { Bishop } from "../../src/Board/Bishop";
import { Board } from "../../src/Board/Board";
import { King } from "../../src/Board/King";
import { Knight } from "../../src/Board/Knight";
import { Pawn } from "../../src/Board/Pawn";
import { Piece } from "../../src/Board/Piece";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Rook } from "../../src/Board/Rook";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";

describe("TESTS FOR CHECKEDMATE", () => {
  //TEST 1//

  test("check white King checkmate on position [3][4]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(3, 4);
    const blackKingPosition = new Square(7, 5);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(blackKing);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(true);
  });

  //TEST 2//

  test("check white King checkmate on position [5][2]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(5, 2);
    const blackKingPosition = new Square(7, 5);
    const blackKnightPosition = new Square(6, 1);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(true);
  });

  //TEST 3//

  test("check white King checkmate on position [0][0]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(0, 0);
    const whiteBishopPosition = new Square(1, 1);

    const blackKingPosition = new Square(7, 5);
    const blackKnightPosition = new Square(6, 1);
    const blackRookPosition = new Square(3, 1);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const whiteBishop = new Bishop(
      PieceColor.White,
      PieceType.Bishop,
      whiteBishopPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    const blackRook = new Rook(
      PieceColor.Black,
      PieceType.Rook,
      blackRookPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(whiteBishop);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);
    newBoard.addPiece(blackRook);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(true);
  });

  //TEST 4//

  test("check white King checkmate on position [2][2]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(2, 2);
    const whiteBishopPosition = new Square(3, 4);
    const whitePawnPosition = new Square(7, 8);

    const blackKingPosition = new Square(7, 5);
    const blackKnightPosition = new Square(6, 1);
    const blackRookPosition = new Square(3, 1);
    const blackQueenPosition = new Square(5, 5);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const whiteBishop = new Bishop(
      PieceColor.White,
      PieceType.Bishop,
      whiteBishopPosition,
      false
    );

    const whitePawn = new Pawn(
      PieceColor.White,
      PieceType.Pawn,
      whitePawnPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    const blackRook = new Rook(
      PieceColor.Black,
      PieceType.Rook,
      blackRookPosition,
      false
    );

    const blackQueen = new Rook(
      PieceColor.Black,
      PieceType.Queen,
      blackQueenPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(whiteBishop);
    newBoard.addPiece(whitePawn);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);
    newBoard.addPiece(blackRook);
    newBoard.addPiece(blackQueen);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(true);
  });

  //TEST 5//

  test("check black King checkmate on position [6][5]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(3, 2);
    const blackKingPosition = new Square(6, 5);
    const blackKnightPosition = new Square(6, 4);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(false);
  });

  //TEST 6//
  test("check black King checkmate on position [6][3]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(2, 2);
    const whiteBishopPosition = new Square(3, 4);
    const whitePawnPosition = new Square(7, 8);
    const whiteRookPosition = new Square(3, 3);
    const whiteQueenPosition = new Square(4, 4);

    const blackKingPosition = new Square(6, 3);
    const blackKnightPosition = new Square(6, 1);
    const blackRookPosition = new Square(6, 4);
    const blackQueenPosition = new Square(6, 5);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const whiteBishop = new Bishop(
      PieceColor.White,
      PieceType.Bishop,
      whiteBishopPosition,
      false
    );

    const whitePawn = new Pawn(
      PieceColor.White,
      PieceType.Pawn,
      whitePawnPosition,
      false
    );

    const whiteRook = new Pawn(
      PieceColor.White,
      PieceType.Rook,
      whiteRookPosition,
      false
    );

    const whiteQueen = new Pawn(
      PieceColor.White,
      PieceType.Queen,
      whiteQueenPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    const blackRook = new Rook(
      PieceColor.Black,
      PieceType.Rook,
      blackRookPosition,
      false
    );

    const blackQueen = new Rook(
      PieceColor.Black,
      PieceType.Queen,
      blackQueenPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(whiteBishop);
    newBoard.addPiece(whitePawn);
    newBoard.addPiece(whiteRook);
    newBoard.addPiece(whiteQueen);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);
    newBoard.addPiece(blackRook);
    newBoard.addPiece(blackQueen);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(false);
  });

  //TEST 7//

  test("check white King checkmate on position [6][6]", () => {
    const newBoard = new Board();

    const whiteKingPosition = new Square(5, 2);
    const whiteQueenPosition = new Square(4, 4);
    const whiteRookPosition = new Square(2, 3);
    const blackKingPosition = new Square(6, 6);
    const blackKnightPosition = new Square(6, 1);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const whiteQueen = new Pawn(
      PieceColor.White,
      PieceType.Queen,
      whiteQueenPosition,
      false
    );

    const whiteRook = new Pawn(
      PieceColor.White,
      PieceType.Rook,
      whiteRookPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    const blackKnight = new Knight(
      PieceColor.Black,
      PieceType.Knight,
      blackKnightPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(whiteQueen);
    newBoard.addPiece(whiteRook);
    newBoard.addPiece(blackKing);
    newBoard.addPiece(blackKnight);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(false);
  });

  //TEST 8//

  test("check black King checkmate on position [6][6]", () => {
    const newBoard = new Board();
    const whiteKingPosition = new Square(3, 4);
    const blackKingPosition = new Square(6, 6);

    const whiteKing = new King(
      PieceColor.White,
      PieceType.King,
      whiteKingPosition,
      false
    );

    const blackKing = new King(
      PieceColor.Black,
      PieceType.King,
      blackKingPosition,
      false
    );

    newBoard.addPiece(whiteKing);
    newBoard.addPiece(blackKing);

    const newGame = new Game(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      newBoard
    );

    const result = newGame.isCheckmated();
    expect(result).toBe(false);
  });
});
