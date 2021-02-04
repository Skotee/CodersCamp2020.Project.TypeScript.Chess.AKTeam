import { Knight } from "../../src/Board/Knight";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Square } from "../../src/Board/Square";
import { Board } from "../../src/Board/Board";
import { Game } from "../../src/Game/Game";
import { Move } from "../../src/Game/Move";
import { Pawn } from "../../src/Board/Pawn";
import { Rook } from "../../src/Board/Rook";

// CHECKING IS MOVE POSSIBLE FOR CERTAIN PAWN ACTIONS:
// 1 - PAWN MOVE
// 2 - PAWN ATTACK
// 3 - PAWN STARTING MOVE
// 4 - PAWN ATTACK AFTER OPPOSITE PAWN STARTING MOVE
// 5 - PAWN PROMOTION


describe('VALID ACTIONS FOR PAWN', () => {
    // TEST 1.1
    test("WHITE PAWN MOVE AT [1][0] 7A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 0))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //when
        const newMove = new Move(new Square(2, 0), new Square(1, 0), wPawn, null);
    
        // then
        expect(game.isMovePossible(newMove)).toBe(true);
    });
    // TEST 1.2
    test("BLOCKING WHITE PAWN MOVE AT [1][0] 7A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(2, 0));
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(1,0));
        const board = new Board();
        board.addPiece(wPawn);
        board.addPiece(bRook);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //when
        const newMove = new Move(new Square(2, 0), new Square(1, 0), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(false);
    });
    // TEST 2.1
    test("WHITE PAWN ATTACK FROM [6][7] 2H TO [5][6] 3G", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 7));
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(5,6));
        const board = new Board();
        board.addPiece(wPawn);
        board.addPiece(bRook);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //when
        const newMove = new Move(new Square(6, 7), new Square(5, 6), wPawn, bRook);
        // then
        expect(game.isMovePossible(newMove)).toBe(true);
    });
    // TEST 2.2
    test("WHITE PAWN CAN'T ATTACK FROM [6][7] 2H TO [5][6] 3G", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 7))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        
        //when
        const newMove = new Move(new Square(6, 7), new Square(5, 6), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(false);
    });
    // TEST 3.1
    test("WHITE PAWN CAN DO STARTING MOVE FROM [6][6] 2G TO [4][6] 4G", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 6))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        
        //when
        const newMove = new Move(new Square(6, 6), new Square(4, 6), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(true);
    });
    // TEST 3.2
    test("WHITE PAWN CAN'T DO STARTING MOVE FROM [5][6] 3G TO [3][6] 5G", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.King, new Square(5, 6))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        
        //when
        const newMove = new Move(new Square(5, 6), new Square(3, 6), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(false);
    });
    // TEST 4.1
    test("WHITE PAWN CAN CAPTURE BLACK PAWN IN FLIGHT", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 7));
        const bPawn = new Pawn(PieceColor.Black, PieceType.Rook, new Square(5,6));
        const board = new Board();
        board.addPiece(wPawn);
        board.addPiece(bPawn);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        //when
        const bMove = new Move(new Square(1, 0), new Square(3, 0) ,bPawn, null)
        const wMove = new Move(new Square(3, 1), new Square(2, 1), wPawn, bPawn);
        // then
        expect(game.isMovePossible(wMove)).toBe(true);
    });
    // TEST 4.2
    test("WHITE PAWN CAN'T CAPTURE BLACK PAWN IN FLIGHT", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, 7));
        const bPawn = new Pawn(PieceColor.Black, PieceType.Rook, new Square(5,6));
        const board = new Board();
        board.addPiece(wPawn);
        board.addPiece(bPawn);
        const game = new Game(undefined, PieceColor.Black, undefined, undefined, undefined, board);
        //when
        const bMove = new Move(new Square(2, 0), new Square(3, 0) ,bPawn, null)
        const wMove = new Move(new Square(3, 1), new Square(2, 1), wPawn, bPawn);
        // then
        expect(game.isMovePossible(wMove)).toBe(false);
    });
    // TEST 5.1
    test("WHITE PAWN PROMOTION AT [0][0] 8A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.King, new Square(1, 0))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        
        //when
        const newMove = new Move(new Square(1, 0), new Square(0, 0), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(true);
        expect(newMove.isPawnPromotion()).toBe(true);
    });
    // TEST 5.2
    test("WHITE PAWN PROMOTION NOT POSSIBLE AT [0][0] 8A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.King, new Square(1, 0))
        const board = new Board();
        board.addPiece(wPawn);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        
        //when
        const newMove = new Move(new Square(1, 0), new Square(0, 0), wPawn, null);
        // then
        expect(game.isMovePossible(newMove)).toBe(false);
        expect(newMove.isPawnPromotion()).toBe(false);
    });
    // TEST 5.3
    test("WHITE PAWN PROMOTION WITH ROOK CAPTURE FROM 7B[1][1] TO [0][0] 8A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.Pawn, new Square(1, 1));
        const bRook = new Rook(PieceColor.Black, PieceType.Rook, new Square(0,0));
        const board = new Board();
        board.addPiece(wPawn);
        board.addPiece(bRook);
        const game = new Game(undefined, PieceColor.White, undefined, undefined, undefined, board);
        //when
        const newMove = new Move(new Square(1, 1), new Square(0, 0), wPawn, bRook);
        // then
        expect(game.isMovePossible(newMove)).toBe(true);
        expect(newMove.isPawnPromotion()).toBe(true);
    });
});