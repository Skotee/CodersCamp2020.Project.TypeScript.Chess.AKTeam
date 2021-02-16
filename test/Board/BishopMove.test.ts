import { Board } from "../../src/Board/Board";
import { Pawn } from "../../src/Board/Pawn";
import { Bishop } from "../../src/Board/Bishop";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Queen } from "../../src/Board/Queen";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";


describe("Moves for bishop", () => {
    //TEST 1-1
    test("Bishop can move on free square", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(0, 0));
        const board = new Board();
        board.addPiece(bishop);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(6, 6), bishop, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-2
    test("Bishop can move on free square", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(3, 5));
        const board = new Board();
        board.addPiece(bishop);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 5), new Square(4, 4), bishop, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-3
    test("Bishop can move on free square", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(0, 7));
        const board = new Board();
        board.addPiece(bishop);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 7), new Square(4, 3), bishop, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 1-4
    test("Bishop can move on free square", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(3, 1));
        const board = new Board();
        board.addPiece(bishop);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 1), new Square(5, 3), bishop, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 2-1
    test("White bishop can't move on square with white Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 5));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(3, 4));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(3, 4), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-2
    test("White bishop can't move on square with white Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(0, 0));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 2));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(2, 2), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-3
    test("White bishop can't move on square with white Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(3, 2));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(4, 3));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 2), new Square(4, 3), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 2-4
    test("White bishop can't move on square with white Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(6, 0));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(1, 5));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 0), new Square(1, 5), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 3-1
    test("White bishop captures black Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 5));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(5, 4));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(5, 4), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-2
    test("White bishop captures black Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(0, 0));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(2, 2));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(0, 0), new Square(2, 2), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-3
    test("White bishop captures black Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(3, 2));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(5, 4));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(pawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(3, 2), new Square(5, 4), bishop, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 3-4
    test("White bishop captures black Piece", () => {
        //given
        const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(6, 0));
        const queen = new Queen(PieceColor.Black, PieceType.Queen, new Square(4, 2));
        const board = new Board();
        board.addPiece(bishop);
        board.addPiece(queen);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(6, 0), new Square(4, 2), bishop, queen);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    // //TEST 4-1
    // test("Move beyond the board", () => {
    //     //given
    //     const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(2, 5));
    //     const board = new Board();
    //     board.addPiece(bishop);
    //     const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //     const newMove = new Move(new Square(2, 5), new Square(5, 8), bishop, null);
    //     //when
    //     const possibleMove = game.isMovePossible(newMove);
    //     //then
    //     expect(possibleMove).toBe(false);
    // });

    // //TEST 4-2
    // test("Move beyond the board", () => {
    //     //given
    //     const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(7, 0));
    //     const board = new Board();
    //     board.addPiece(bishop);
    //     const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //     const newMove = new Move(new Square(7, 0), new Square(5, 9), bishop, null);
    //     //when
    //     const possibleMove = game.isMovePossible(newMove);
    //     //then
    //     expect(possibleMove).toBe(false);
    // });

    // //TEST 4-3
    // test("Move beyond the board", () => {
    //     //given
    //     const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 4));
    //     const board = new Board();
    //     board.addPiece(bishop);
    //     const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //     const newMove = new Move(new Square(4, 4), new Square(10, 228), bishop, null);
    //     //when
    //     const possibleMove = game.isMovePossible(newMove);
    //     //then
    //     expect(possibleMove).toBe(false);
    // });

    // //TEST 4-4
    // test("Move beyond the board", () => {
    //     //given
    //     const bishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(1, 6));
    //     const board = new Board();
    //     board.addPiece(bishop);
    //     const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
    //     const newMove = new Move(new Square(1, 6), new Square(11, -2), bishop, null);
    //     //when
    //     const possibleMove = game.isMovePossible(newMove);
    //     //then
    //     expect(possibleMove).toBe(false);
    // });

}) 