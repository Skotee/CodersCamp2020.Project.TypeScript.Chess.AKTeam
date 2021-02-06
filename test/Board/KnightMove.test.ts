import { Knight } from "../../src/Board/Knight";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Square } from "../../src/Board/Square";
import { Board } from "../../src/Board/Board";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";
import { Pawn } from "../../src/Board/Pawn";

describe("Moves for knight", () => {
    //TEST 1-1
    test("Knight can move on free square", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(2, 2));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 2), new Square(0, 1), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-2
    test("Knight can move on free square", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 4));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 4), new Square(3, 6), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-3
    test("Knight can move on free square", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(6, 2));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 2), new Square(7, 0), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-4
    test("Knight can move on free square", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(5, 1));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(5, 1), new Square(6, 3), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 2-1
    test("White knight can't move on square with white Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 5));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(2, 6), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-2
    test("White knight can't move on square with white Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 4));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(3, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 4), new Square(3, 6), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-3
    test("White knight can't move on square with white Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(6, 2));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(7, 0));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 2), new Square(7, 0), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-4
    test("White knight can't move on square with white Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(5, 1));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 3));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(5, 1), new Square(6, 3), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 3-1
    test("White Knight captures black Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 5));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(2, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(2, 6), knight, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-2
    test("White Knight captures black Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(6, 6));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(4, 7));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 6), new Square(4, 7), knight, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-3
    test("White Knight captures black Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 4));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(3, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 4), new Square(3, 6), knight, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-4
    test("White Knight captures black Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(7, 4));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(6, 2));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(2, 6), knight, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 4-1
    test("Move beyond the board", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(7, 0));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(7, 0), new Square(8, 2), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-2
    test("Move beyond the board", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(7, 7));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(7, 7), new Square(5, 8), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-3
    test("Move beyond the board", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(1, 6));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(1, 6), new Square(0, 8), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-4
    test("Move beyond the board", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(2, 6));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 6), new Square(3, 8), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

})