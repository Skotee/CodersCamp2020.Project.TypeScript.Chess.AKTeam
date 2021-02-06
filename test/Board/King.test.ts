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
import { Bishop } from "../../src/Board/Bishop";

// TESTS: 
// 1-KING MOVEMENT
// 2-KING MOVE TO ITSELF POSITION
// 3-KING CAPTUREING BLACK PIECES
// 4-KING TRYING TO CAPTURE WHITE PIECES
// 5-KING MOVING OUT OF CHESSBOARD

describe("TESTS FOR KING", () => {
  //TEST 1
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
    //TEST 2
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
    
    //TEST 3.1
    test("KING TRYING TO CAPTURE BLACK PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const bKnight = new Knight(PieceColor.Black,PieceType.Knight,new Square(6, 2));
      const bRook = new Rook(PieceColor.Black,PieceType.Rook,new Square(7, 2));
      newBoard.addPiece(bRook);
      newBoard.addPiece(bKnight);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, bKnight)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    // TEST 3.2
    test("KING TRYING TO CAPTURE BLACK PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const bKnight = new Knight(PieceColor.Black,PieceType.Knight,new Square(6, 2));
      const bRook = new Rook(PieceColor.Black,PieceType.Rook,new Square(7, 2));
      newBoard.addPiece(bRook);
      newBoard.addPiece(bKnight);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, bKnight)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    // TEST 3.3
    test("KING TRYING TO CAPTURE BLACK PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const bBishop = new Bishop(PieceColor.Black,PieceType.Bishop,new Square(6, 2));
      newBoard.addPiece(bBishop);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, bBishop)
      expect(newGame.isMovePossible(kMove)).toBe(true);
    });
    // TEST 3.4
    test("KING TRYING TO CAPTURE BLACK PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const bKnight = new Knight(PieceColor.Black,PieceType.Knight,new Square(6, 2));
      newBoard.addPiece(bKnight);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, bKnight)
      expect(newGame.isMovePossible(kMove)).toBe(true);
    });
    //TEST 4.1
    test("KING TRYING TO CAPTURE WHITE PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const wKnight = new Knight(PieceColor.White,PieceType.Knight,new Square(6, 2));
      newBoard.addPiece(wKnight);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, wKnight)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 4.2
    test("KING TRYING TO CAPTURE WHITE PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const wPawn = new Pawn(PieceColor.White,PieceType.Pawn,new Square(6, 2));
      newBoard.addPiece(wPawn);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, wPawn)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 4.3
    test("KING TRYING TO CAPTURE WHITE PIECES", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const wBishop = new Bishop(PieceColor.White,PieceType.Bishop,new Square(6, 2));
      newBoard.addPiece(wBishop);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, wBishop)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 4.4
    test("KING CAN'T MOVE AT CERTAIN SQUARE", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(5, 2));
      const wQueen = new Queen(PieceColor.White,PieceType.Queen,new Square(6, 2));
      newBoard.addPiece(wQueen);
      newBoard.addPiece(whiteKing);
  
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(5,2), new Square(6,2), whiteKing, wQueen)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 5.1
    test("KING MOVING OUT OF CHESSBOARD", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(6, 7));
      
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(6,7), new Square(6,8), whiteKing, null)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 5.2
    test("KING MOVING OUT OF CHESSBOARD", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(7, 7));
      
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(7,7), new Square(8,7), whiteKing, null)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 5.3
    test("KING MOVING OUT OF CHESSBOARD", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(7, 7));
      
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(7,7), new Square(7,8), whiteKing, null)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    //TEST 5.4
    test("KING MOVING OUT OF CHESSBOARD", () => {
      const newBoard = new Board();
  
      const whiteKing = new King(PieceColor.White,PieceType.King,new Square(7, 7));
      
      const newGame = new Game(undefined,PieceColor.White,undefined,undefined,undefined,newBoard);
      const kMove = new Move(new Square(7,7), new Square(8,8), whiteKing, null)
      expect(newGame.isMovePossible(kMove)).toBe(false);
    });
    
  }) 