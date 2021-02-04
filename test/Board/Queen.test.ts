import { Board } from "../../src/Board/Board";
import { Pawn } from "../../src/Board/Pawn";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Queen } from "../../src/Board/Queen";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";


describe("Moves for queen", () => {
    //TEST 1-1
    test("Queen can move on free square", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(0, 0));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(7, 7), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-2
    test("Queen can move on free square", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(2, 5));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 5), new Square(5, 2), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-3
    test("Queen can move on free square", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(0, 7));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 7), new Square(4, 7), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-4
    test("Queen can move on free square", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(3, 1));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 1), new Square(0, 4), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 2-1
    test("White queen can't move on square with white Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(4, 5));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(4, 7));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(4, 7), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-2
    test("White queen can't move on square with white Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(0, 0));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(3, 2));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(3, 2), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-3
    test("White queen can't move on square with white Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(3, 2));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(3, 5));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 2), new Square(3, 5), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-4
    test("White queen can't move on square with white Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(6, 0));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(1, 5));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 0), new Square(1, 5), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 3-1
    test("White queen captures black Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(4, 5));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(4, 7));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(4, 7), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-2
    test("White queen captures black Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(0, 0));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(3, 2));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(3, 2), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-3
    test("White queen captures black Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(3, 2));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(3, 5));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 2), new Square(3, 5), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-4
    test("White queen captures black Piece", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(6, 0));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(1, 5));
        const board = new Board();
        board.addPiece(queen);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 0), new Square(1, 5), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 4-1
    test("Move beyond the board", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(2, 5));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 5), new Square(5, 8), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-2
    test("Move beyond the board", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(7, 0));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(7, 0), new Square(8, 0), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-3
    test("Move beyond the board", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(4, 4));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 4), new Square(4, 8), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 4-4
    test("Move beyond the board", () => {
        //given
        const queen = new Queen(PieceColor.White, PieceType.Queen, new Square(1, 6));
        const board = new Board();
        board.addPiece(queen);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(1, 6), new Square(1, 8), queen, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

})