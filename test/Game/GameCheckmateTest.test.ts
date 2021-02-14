import { Board } from "../../src/Board/Board";
import { King } from "../../src/Board/King";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Rook } from "../../src/Board/Rook";
import { Queen } from "../../src/Board/Queen";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";

describe("TESTS FOR CHECKEDMATE", () => {
  //TEST 1//

  test("BLACK KING CHECKMATED BY ROOK AND WHITE KING", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(1, 2));
    const rookWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kingWhite);
    board.addPiece(rookWhite);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    new Move(new Square(2, 1), new Square(2, 0), rookWhite, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });

  //TEST 2//

  test("BLACK KING CHECKMATE BY ROOK AND QUEEN", () => {
    //given
    const queenWhite = new Queen(PieceColor.White, PieceType.Queen, new Square(1, 2));
    const rookWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(queenWhite);
    board.addPiece(rookWhite);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2, 1), new Square(0, 1), rookWhite, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });

  //TEST 3//

  test("BLACK KING IS NOT CHECKAMTED, BUT SHOULD BE CHECKED", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(1, 1));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kingWhite);
    board.addPiece(rookWhite);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(1, 1), new Square(1, 0), rookWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });

  //TEST 4//

  test("BLACK KING CHECKMATED BY TWO ROOKS", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite1 = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 1));
    const rookWhite2 = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 2));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(rookWhite2);
    board.addPiece(rookWhite1);
    board.addPiece(kingBlack);
    board.addPiece(kingWhite);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2, 2), new Square(2, 0), rookWhite2, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });
  //TEST 5//

  test("BLACK KING CHECKMATE BY TWO ROOKS", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite1 = new Rook(PieceColor.White, PieceType.Rook, new Square(4, 1));
    const rookWhite2 = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 2));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(rookWhite2);
    board.addPiece(rookWhite1);
    board.addPiece(kingBlack);
    board.addPiece(kingWhite);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(3, 2), new Square(3, 0), rookWhite2, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });
  //TEST 6//

  test("BLACK KING IS NOT CHECKAMTED, BUT SHOULD BE CHECKED", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kingWhite);
    board.addPiece(rookWhite);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2, 1), new Square(2, 0), rookWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });
  //TEST 7//

  test("BLACK KING IS NOT CHECKAMTED", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kingWhite);
    board.addPiece(rookWhite);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2, 1), new Square(2, 7), rookWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(false);
  });
  //TEST 8//

  test("BLACK KING IS NOT CHECKAMTED, BECAUSE HE CAN BE COVERED BY BLACK ROOK", () => {
    //given
    const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rookWhite1 = new Rook(PieceColor.White, PieceType.Rook, new Square(6, 1));
    const rookWhite2 = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const rookBlack = new Rook(PieceColor.Black, PieceType.Rook, new Square(1, 7));
    const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kingWhite);
    board.addPiece(rookWhite1);
    board.addPiece(rookWhite2);
    board.addPiece(rookBlack);
    board.addPiece(kingBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(6, 1), new Square(6, 0), rookWhite1, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });
});
