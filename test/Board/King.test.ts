import { Rook } from "../../src/Board/Rook";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Square } from "../../src/Board/Square";
import { Board } from "../../src/Board/Board";
import { Move } from "../../src/Game/Move";
import { Pawn } from "../../src/Board/Pawn";1
import { Game } from "../../src/Game/Game";
import { Knight } from "../../src/Board/Knight";
import { Queen } from "../../src/Board/Queen";
import { King } from "../../src/Board/King";

describe("TESTS FOR KING", () => {
    test("KING MOVE", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(
        PieceColor.White,
        PieceType.King,
        new Square(5, 2)
      );
  
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(
        undefined,
        PieceColor.White,
        undefined,
        undefined,
        undefined,
        newBoard
      );
  
      const moves = whiteKing.validMoves().map(square => whiteKing.updatePosition(square));
      const possibleMoves = moves.filter(move => newGame.isMovePossible(move));
      const endSquares = possibleMoves.map(move => move.endSquare);
      expect(endSquares).toContainEqual(new Square(5, 1));
      expect(endSquares).toContainEqual(new Square(5, 3));
      expect(endSquares).toContainEqual(new Square(4, 1));
      expect(endSquares).toContainEqual(new Square(4, 2));
      expect(endSquares).toContainEqual(new Square(4, 3));
      expect(endSquares).toContainEqual(new Square(6, 1));
      expect(endSquares).toContainEqual(new Square(6, 2));
      expect(endSquares).toContainEqual(new Square(6, 3));
    });
  
    test("KING CANNOT MOVE TO ITSELF POSITION", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(
        PieceColor.White,
        PieceType.King,
        new Square(5, 2)
      );
  
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        newBoard
      );
      const moves = whiteKing.validMoves().map(square => whiteKing.updatePosition(square));
      const possibleMoves = moves.filter(move => newGame.isMovePossible(move));
      const endSquares = possibleMoves.map(move => move.endSquare);
      expect(endSquares).not.toContainEqual(new Square(5, 2));
    });
  }) 