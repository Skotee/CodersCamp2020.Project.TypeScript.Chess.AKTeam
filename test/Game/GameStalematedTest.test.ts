import { Game } from "../../src/Game/Game";
import { King } from "../../src/Board/King";
import { Square } from "../../src/Board/Square";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Board } from "../../src/Board/Board";
import { Queen } from "../../src/Board/Queen";
import { Knight } from "../../src/Board/Knight";

describe('Is stalemated', () => {
    // TEST 1
    test("White king doesn't have any move on position [0][6]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 6));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(2, 5));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 7));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(true);
    });

    // TEST 2
    test("White king doesn't have any move on position [7][0]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 0));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(6, 2));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(5, 2));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(true);
    });

    // TEST 3
    test("White king doesn't have any move on position [0][2]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 2));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(2, 3));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 1));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(true);
    });

    // TEST 4
    test("White king doesn't have any move on position [0][0]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 0));
        const knightBlack = new Knight(PieceColor.Black, PieceType.Knight, new Square(2, 3));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 2));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(knightBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(true);
    });

    // TEST 5
    test("White king has a move on position [0][6]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 6));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(6, 7));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 7));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(false);
    });

    // TEST 6
    test("White king has a move on position [7][0]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(7, 0));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(6, 3));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(5, 2));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(false);
    });

    // TEST 7
    test("White king has a move on position [0][2]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 2));
        const queenBlack = new Queen(PieceColor.Black, PieceType.Queen, new Square(6, 0));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 1));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(queenBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(false);
    });

    // TEST 8
    test("White king has a move on position [0][0]", () => {
        //given
        const kingWhite = new King(PieceColor.White, PieceType.King, new Square(0, 0));
        const knightBlack = new Knight(PieceColor.Black, PieceType.Knight, new Square(5, 5));
        const kingBlack = new King(PieceColor.Black, PieceType.King, new Square(2, 2));
        const board = new Board();
        board.addPiece(kingWhite);
        board.addPiece(knightBlack);
        board.addPiece(kingBlack);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        // when
        const gameResult = game.isStalemated();
        // then
        expect(gameResult).toBe(false);
    });
});