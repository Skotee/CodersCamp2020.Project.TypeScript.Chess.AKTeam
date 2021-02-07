import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Board } from "../../src/Board/Board";
import { Move } from "../../src/Game/Move";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Rook } from "../../src/Board/Rook";
import { King } from "../../src/Board/King";

describe("Tests for Castle (Roszada)", () => {

  //TEST 1-1//

  test("Castle Move is possible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0));
    const king = new King(PieceColor.White, PieceType.King, new Square(7, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(true);
  });

  //TEST 1-2//

  test("Castle Move is possible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 7));
    const king = new King(PieceColor.White, PieceType.King, new Square(7, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(true);
  });

  //TEST 1-3//

  test("Castle Move is possible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 0));
    const king = new King(PieceColor.Black, PieceType.King, new Square(0, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(true);
  });

  //TEST 1-4//

  test("Castle Move is possible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 7));
    const king = new King(PieceColor.Black, PieceType.King, new Square(0, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(true);
  });
  
  //TEST 2-1//

  test("Castle Move is impossible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0));
    const king = new King(PieceColor.White, PieceType.King, new Square(7, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    new Move(new Square(7, 4), new Square(7, 3), king, null);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(false);
  });

  //TEST 2-2//

  test("Castle Move is impossible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.White, PieceType.Rook, new Square(7, 7));
    const king = new King(PieceColor.White, PieceType.King, new Square(7, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    new Move(new Square(7, 4), new Square(6, 3), king, null);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(false);
  });

  //TEST 2-3//

  test("Castle Move is impossible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 0));
    const king = new King(PieceColor.Black, PieceType.King, new Square(0, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
    new Move(new Square(0, 0), new Square(2, 0), rook, null);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(false);
  });

  //TEST 2-4//

  test("Castle Move is impossible", () => {
    const board = new Board();
    const rook = new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 7));
    const king = new King(PieceColor.Black, PieceType.King, new Square(0, 4));
    board.addPiece(king);
    board.addPiece(rook);
    const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
    new Move(new Square(0, 7), new Square(2, 7), rook, null);
    //when
    const castleMove = game.isCastlePossible();
    //then
    expect(castleMove).toBe(false);
  });
})

