import { Knight } from "../../src/Board/Knight";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Square } from "../../src/Board/Square";
import { Board } from "../../src/Board/Board";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";
import { Pawn } from "../../src/Board/Pawn";



describe("Moves for knight", () => {
    //TEST 1
    test("Knight can move on free square", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(2, 2));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 2), new Square(0, 1), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 2
    test("White knight can't move on square with white Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 5));
        const pawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(2, 6), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

    //TEST 3
    test("White Knight captures black Piece", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(4, 5));
        const pawn = new Pawn(PieceColor.Black, PieceType.Pawn, new Square(2, 6));
        const board = new Board();
        board.addPiece(knight);
        board.addPiece(pawn);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(4, 5), new Square(2, 6), knight, pawn);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(true);
    });

    //TEST 4
    test("Move beyond the board", () => {
        //given
        const knight = new Knight(PieceColor.White, PieceType.Knight, new Square(7, 0));
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(7, 0), new Square(8, 2), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        //then
        expect(possibleMove).toBe(false);
    });

})