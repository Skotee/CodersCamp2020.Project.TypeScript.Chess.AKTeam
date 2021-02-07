import { Bishop } from "../../src/Board/Bishop";
import { Board } from "../../src/Board/Board";
import { King } from "../../src/Board/King";
import { Knight } from "../../src/Board/Knight";
import { Pawn } from "../../src/Board/Pawn";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Rook } from "../../src/Board/Rook";
import { Queen } from "../../src/Board/Queen";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";

describe("TESTS FOR CHECKEDMATE", () => {
  //TEST 1//

  test("BLACK KING CHECKMATE BY ROOK AND WHITE KING", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(1, 2));
    const rWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kWhite);
    board.addPiece(rWhite);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    new Move(new Square(2,1), new Square(2,0), rWhite, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });

  //TEST 2//

  test("BLACK KING CHECKMATE BY ROOK AND QUEEN", () => {
    //given
    const qWhite = new Queen(PieceColor.White, PieceType.Queen, new Square(1, 2));
    const rWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(qWhite);
    board.addPiece(rWhite);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2,1), new Square(0,1), rWhite, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });

  //TEST 3//

  test("BLACK KING IS NOT CHECKAMTED, BUT SHOULD BE CHECKED", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(1, 1));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kWhite);
    board.addPiece(rWhite);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(1,1), new Square(1,0), rWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });

  //TEST 4//

  test("BLACK KING CHECKMATED BY TWO ROOKS", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const r1White = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 1));
    const r2White = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 2));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(r2White);
    board.addPiece(r1White);
    board.addPiece(kBlack);
    board.addPiece(kWhite);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2,2), new Square(2,0), r2White, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });
  //TEST 5//

  test("BLACK KING CHECKMATE BY TWO ROOKS", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const r1White = new Rook(PieceColor.White, PieceType.Rook, new Square(4, 1));
    const r2White = new Rook(PieceColor.White, PieceType.Rook, new Square(3, 2));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(r2White);
    board.addPiece(r1White);
    board.addPiece(kBlack);
    board.addPiece(kWhite);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(3,2), new Square(3,0), r2White, null);
    // then
    const gameResult = game.isCheckmated();
    expect(gameResult).toBe(true);
  });
  //TEST 6//

  test("BLACK KING IS NOT CHECKAMTED, BUT SHOULD BE CHECKED", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kWhite);
    board.addPiece(rWhite);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2,1), new Square(2,0), rWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });
  //TEST 7//

  test("BLACK KING IS NOT CHECKAMTED", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const rWhite = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kWhite);
    board.addPiece(rWhite);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(2,1), new Square(2,7), rWhite, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(false);
  });
  //TEST 8//

  test("BLACK KING IS NOT CHECKAMTED, BECAUSE HE CAN BE COVERED BY BLACK ROOK", () => {
    //given
    const kWhite = new King(PieceColor.White, PieceType.King, new Square(7, 7));
    const r1White = new Rook(PieceColor.White, PieceType.Rook, new Square(6, 1));
    const r2White = new Rook(PieceColor.White, PieceType.Rook, new Square(2, 1));
    const rBlack = new Rook(PieceColor.Black, PieceType.Rook, new Square(1, 7));
    const kBlack = new King(PieceColor.Black, PieceType.King, new Square(0, 0));
    const board = new Board();
    board.addPiece(kWhite);
    board.addPiece(r1White);
    board.addPiece(r2White);
    board.addPiece(rBlack);
    board.addPiece(kBlack);
    const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    // when
    const checkMateMove = new Move(new Square(6,1), new Square(6,0), r1White, null);
    // then
    const checkMateResult = game.isCheckmated();
    const checkResult = game.isChecked();
    expect(checkMateResult).toBe(false);
    expect(checkResult).toBe(true);
  });
});
