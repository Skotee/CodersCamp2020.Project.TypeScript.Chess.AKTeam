import { Bishop } from "../../src/Board/Bishop";
import { Board } from "../../src/Board/Board";
import { King } from "../../src/Board/King";
import { Knight } from "../../src/Board/Knight";
import { Pawn } from "../../src/Board/Pawn";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Queen } from "../../src/Board/Queen";
import { Rook } from "../../src/Board/Rook";
import { Square } from "../../src/Board/Square";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";

describe("End game rules", () => {
    //TEST 1-1
    test("King vs king", () => {
        //given
        const wKing = new King(PieceColor.White, PieceType.King, new Square(3, 0));
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(7, 0));
        const board = new Board();
        board.addPiece(wKing);
        board.addPiece(bKing);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //then
        expect(game.isEnded()).toBe(true);
    });
    //TEST 1-2
    test("King vs king + knight", () => {
        //given
        const wKing = new King(PieceColor.White, PieceType.King, new Square(6, 4));
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(3, 4));
        const bKnight = new Knight(PieceColor.Black, PieceType.Knight, new Square(3, 5));
        const board = new Board();
        board.addPiece(wKing);
        board.addPiece(bKing);
        board.addPiece(bKnight);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //then
        expect(game.isEnded()).toBe(true);
    });
    //TEST 1-3
    test("King vs king + bishop", () => {
        //given
        const wKing = new King(PieceColor.White, PieceType.King, new Square(1, 3));
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(1, 5));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(3, 6));
        const board = new Board();
        board.addPiece(wKing);
        board.addPiece(bKing);
        board.addPiece(wBishop);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //then
        expect(game.isEnded()).toBe(true);
    });
    //TEST 1-4
    test("King vs king + rook", () => {
        //given
        const wKing = new King(PieceColor.White, PieceType.King, new Square(5, 2));
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(2, 3));
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(3, 6));
        const board = new Board();
        board.addPiece(wKing);
        board.addPiece(bKing);
        board.addPiece(bRook);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //then
        expect(game.isEnded()).toBe(true);
    });

    //TEST 2-1
    test("50 move without capture and pawn move (1)", () => {
        //given
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(3, 6));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 1));
        const board = new Board();
        board.addPiece(bRook);
        board.addPiece(wBishop);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        // when
        for (let i = 0; i < 25; i++) {
            let newMove1 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
            let newMove2 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
            let newMove3 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
            let newMove4 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        }
        //then
        expect(game.checkFiftyMoveRule()).toBe(true);
    });

    //TEST 2-2
    test("50 move without capture and pawn move (2)", () => {
        //given
        const bQueen = new Queen(PieceColor.Black, PieceType.Queen, new Square(3, 6));
        const wKnight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 1));
        const board = new Board();
        board.addPiece(bQueen);
        board.addPiece(wKnight);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        // when
        for (let i = 0; i < 25; i++) {
            let newMove1 = new Move(new Square(6, 5), new Square(4, 7), bQueen, null);
            let newMove2 = new Move(new Square(4, 1), new Square(2, 2), wKnight, null);
            let newMove3 = new Move(new Square(4, 7), new Square(6, 5), bQueen, null);
            let newMove4 = new Move(new Square(2, 2), new Square(4, 1), wKnight, null);
        }
        //then
        expect(game.checkFiftyMoveRule()).toBe(true);
    });

    //TEST 2-3
    test("50 move without pawn move, but with capture", () => {
        //given
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(3, 6));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 1));
        const wKnight = new Knight(PieceColor.White, PieceType.Knight, new Square(0, 6));
        const board = new Board();
        board.addPiece(bRook);
        board.addPiece(wBishop);
        board.addPiece(wKnight);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        // when
        for (let i = 0; i < 24; i++) {
            let newMove1 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
            let newMove2 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
            let newMove3 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
            let newMove4 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        }
        let newMove97 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
        let newMove98 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
        let newMove99 = new Move(new Square(2, 6), new Square(0, 6), bRook, wKnight);
        let newMove100 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        //then
        expect(game.checkFiftyMoveRule()).toBe(false);
    });
    //TEST 2-4
    test("50 move without capture, but with pawn move", () => {
        //given
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(3, 6));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 1));
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(1, 3));
        const board = new Board();
        board.addPiece(bRook);
        board.addPiece(wBishop);
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        // when
        for (let i = 0; i < 24; i++) {
            let newMove1 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
            let newMove2 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
            let newMove3 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
            let newMove4 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        }
        let newMove97 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
        let newMove98 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
        let newMove99 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
        let newMove100 = new Move(new Square(1, 3), new Square(0, 3), wPawn, null);
        //then
        expect(game.checkFiftyMoveRule()).toBe(false);
    });
    //TEST 3-1
    test("Check triple move (1)", () => {
        //given
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(3, 6));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(4, 1));
        const board = new Board();
        board.addPiece(bRook);
        board.addPiece(wBishop);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        //when
        let blackMove1 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
        let whiteMove1 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
        let blackMove2 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
        let whiteMove2 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        let blackMove3 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
        let whiteMove3 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
        let blackMove4 = new Move(new Square(2, 6), new Square(3, 6), bRook, null);
        let whiteMove4 = new Move(new Square(5, 1), new Square(4, 1), wBishop, null);
        let blackMove5 = new Move(new Square(3, 6), new Square(2, 6), bRook, null);
        let whiteMove5 = new Move(new Square(4, 1), new Square(5, 1), wBishop, null);
        //then
        expect(game.checkTripleMoveRule()).toBe(true);
    });
    //TEST 3-2
    test("Check triple move (2)", () => {
        //given
        const bQueen = new Queen(PieceColor.Black, PieceType.Queen, new Square(2, 1));
        const wRook = new Rook(PieceColor.White, PieceType.Rook, new Square(1, 4));
        const board = new Board();
        board.addPiece(bQueen);
        board.addPiece(wRook);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //when
        let blackMove1 = new Move(new Square(2, 1), new Square(5, 1), bQueen, null);
        let whiteMove1 = new Move(new Square(1, 4), new Square(1, 6), wRook, null);
        let blackMove2 = new Move(new Square(5, 1), new Square(2, 1), bQueen, null);
        let whiteMove2 = new Move(new Square(1, 6), new Square(1, 4), wRook, null);
        let blackMove3 = new Move(new Square(2, 1), new Square(5, 1), bQueen, null);
        let whiteMove3 = new Move(new Square(1, 4), new Square(1, 6), wRook, null);
        let blackMove4 = new Move(new Square(5, 1), new Square(2, 1), bQueen, null);
        let whiteMove4 = new Move(new Square(1, 6), new Square(1, 4), wRook, null);
        let blackMove5 = new Move(new Square(2, 1), new Square(5, 1), bQueen, null);
        let whiteMove5 = new Move(new Square(1, 4), new Square(1, 6), wRook, null);
        //then
        expect(game.checkTripleMoveRule()).toBe(true);
    });
    //TEST 3-3
    test("Check triple move (3)", () => {
        //given
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(6, 5));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(7, 0));
        const board = new Board();
        board.addPiece(bKing);
        board.addPiece(wBishop);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        //when
        let blackMove1 = new Move(new Square(6, 6), new Square(6, 7), bKing, null);
        let whiteMove1 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        let blackMove2 = new Move(new Square(6, 7), new Square(6, 6), bKing, null);
        let whiteMove2 = new Move(new Square(5, 2), new Square(7, 0), wBishop, null);
        let blackMove3 = new Move(new Square(6, 6), new Square(6, 7), bKing, null);
        let whiteMove3 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        let blackMove4 = new Move(new Square(6, 7), new Square(6, 6), bKing, null);
        let whiteMove4 = new Move(new Square(5, 2), new Square(7, 0), wBishop, null);
        let blackMove5 = new Move(new Square(6, 6), new Square(6, 7), bKing, null);
        let whiteMove5 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        //then
        expect(game.checkTripleMoveRule()).toBe(true);
    });

    //TEST 3-4
    test("Check triple move (4)", () => {
        //given
        const bKing = new King(PieceColor.Black, PieceType.King, new Square(6, 6));
        const wBishop = new Bishop(PieceColor.White, PieceType.Bishop, new Square(7, 0));
        const board = new Board();
        board.addPiece(bKing);
        board.addPiece(wBishop);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        //when
        let blackMove1 = new Move(new Square(6, 6), new Square(6, 7), bKing, null);
        let whiteMove1 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        let blackMove2 = new Move(new Square(6, 7), new Square(6, 6), bKing, null);
        let whiteMove2 = new Move(new Square(5, 2), new Square(7, 0), wBishop, null);
        let blackMove3 = new Move(new Square(6, 6), new Square(6, 7), bKing, null);
        let whiteMove3 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        let blackMove4 = new Move(new Square(6, 7), new Square(6, 6), bKing, null);
        let whiteMove4 = new Move(new Square(5, 2), new Square(7, 0), wBishop, null);
        let blackMove5 = new Move(new Square(6, 6), new Square(5, 6), bKing, null);
        let whiteMove5 = new Move(new Square(7, 0), new Square(5, 2), wBishop, null);
        //then
        expect(game.checkTripleMoveRule()).toBe(false);
    });
})
