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

// promocja piona po wykonaniu ruchu na dane pole
describe("PAWN PROMOTION TEST", () => {
    //TEST 1//
  
    test("check if black pawn can be promoted to other figure at square 1A ([0][0])", () => {
      const newBoard = new Board();
      const blackPwanPos = new Square(0,0);
      const blackPwan = new Pawn(
        PieceColor.Black,
        PieceType.Pawn,
        blackPwanPos,
        true,
      );

      newBoard.addPiece(blackPwan);
      const result = blackPwan.promotionCheck();
      expect(result).toBe(true);

    });

    // TEST 1

    test("check if white pawn can be promoted to other figure at square 8A ([7][0])", () => {
      const newBoard = new Board();
      const whitePwanPos = new Square(7,0);
      const whitePwan = new Pawn(
        PieceColor.White,
        PieceType.Pawn,
        whitePwanPos,
        true,
      );

      newBoard.addPiece(whitePwan);
      const result = whitePwan.promotionCheck();
      expect(result).toBe(true);

    });

    // TEST 3

    test("check if white pawn can be promoted to other figure at square 6E ([5][4])", () => {
      const newBoard = new Board();
      const whitePwanPos = new Square(5,4);
      const whitePwan = new Pawn(
        PieceColor.White,
        PieceType.Pawn,
        whitePwanPos,
        true,
      );

      newBoard.addPiece(whitePwan);
      const result = whitePwan.promotionCheck();
      expect(result).toBe(false);

    });

    // TEST 4

    test("check if black pawn can be promoted to other figure at square 4H ([3][7])", () => {
      const newBoard = new Board();
      const blackPwanPos = new Square(0,0);
      const blackPwan = new Pawn(
        PieceColor.Black,
        PieceType.Pawn,
        blackPwanPos,
        true,
      );

      newBoard.addPiece(blackPwan);
      const result = blackPwan.promotionCheck();
      expect(result).toBe(false);

    });

});