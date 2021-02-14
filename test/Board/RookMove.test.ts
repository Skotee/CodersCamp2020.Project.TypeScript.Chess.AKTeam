import { Rook } from "../../src/Board/Rook";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Square } from "../../src/Board/Square";
import { Board } from "../../src/Board/Board";
import { Move } from "../../src/Game/Move";
import { Pawn } from "../../src/Board/Pawn"; 1
import { Game } from "../../src/Game/Game";
import { Knight } from "../../src/Board/Knight";
import { Queen } from "../../src/Board/Queen";

describe("Moves for rook", () => {

  //TEST 1-1
  test("Rook can move on free square", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 2));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(2, 2), new Square(0, 2), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });

  //TEST 1-2
  test("Rook can move on free square", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(0, 6));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(0, 6), new Square(4, 6), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });

  //TEST 1-3
  test("Rook can move on free square", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 0));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(2, 0), new Square(4, 0), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });

  //TEST 1-4
  test("Rook can move on free square", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 1));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(7, 1), new Square(7, 5), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });

  //TEST 2-1
  test("White rook can't move on square with white Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(0, 2));
    const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 2));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(pawn);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(0, 2), new Square(2, 2), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });

  // //TEST 2-2
  // test("White rook can't move on square with white Piece", () => {
  //   //given
  //   const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 2));
  //   const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 6));
  //   const board = new Board();
  //   board.addPiece(rook);
  //   board.addPiece(pawn);
  //   const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
  //   const newMove = new Move(new Square(2, 2), new Square(2, 6), rook, null);
  //   //when
  //   const possibleMove = game.isMovePossible(newMove);
  //   //then
  //   expect(possibleMove).toBe(false);
  // });

  // //TEST 2-3
  // test("White rook can't move on square with white Piece", () => {
  //   //given
  //   const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(4, 4));
  //   const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(4, 6));
  //   const board = new Board();
  //   // board.addPiece(rook);
  //   // board.addPiece(pawn);
  //   const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
  //   const newMove = new Move(new Square(4, 4), new Square(4, 6), rook, null);
  //   //when
  //   const possibleMove = game.isMovePossible(newMove);
  //   //then
  //   expect(possibleMove).toBe(false);
  // });

  //TEST 2-4
  test("White rook can't move on square with white Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(0, 0));
    const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 0));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(pawn);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(0, 0), new Square(6, 0), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });

  //TEST 3-1
  test("White Rook captures black Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(0, 0));
    const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(5, 0));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(pawn);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(0, 0), new Square(5, 0), rook, pawn);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });
  //TEST 3-2
  test("White Rook captures black Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(0, 7));
    const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(5, 7));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(pawn);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(0, 7), new Square(5, 7), rook, pawn);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });
  //TEST 3-3
  test("White Rook captures black Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(1, 2));
    const knight = new Knight(PieceColor.Black, PieceType.Knight, new Square(5, 2));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(knight);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(1, 2), new Square(5, 2), rook, knight);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });
  //TEST 3-4
  test("White Rook captures black Piece", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 3));
    const queen = new Queen(PieceColor.Black, PieceType.Queen, new Square(7, 3));
    const board = new Board();
    board.addPiece(rook);
    board.addPiece(queen);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(3, 3), new Square(7, 3), rook, queen);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(true);
  });

  //TEST 4-1
  test("Move beyond the board", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(7, 0), new Square(8, 0), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });

  //TEST 4-2
  test("Move beyond the board", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(7, 0), new Square(7, 8), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });

  //TEST 4-3
  test("Move beyond the board", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 5));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(3, 5), new Square(3, 8), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });

  //TEST 4-4
  test("Move beyond the board", () => {
    //given
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(1, 1));
    const board = new Board();
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    const newMove = new Move(new Square(1, 1), new Square(8, 1), rook, null);
    //when
    const possibleMove = game.isMovePossible(newMove);
    //then
    expect(possibleMove).toBe(false);
  });
})