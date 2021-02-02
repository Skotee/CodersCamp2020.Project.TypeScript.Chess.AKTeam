import { Game } from "../../src/Game/Game";
import { King } from "../../src/Board/King";
import { Square } from "../../src/Board/Square";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { PieceType } from "../../src/Board/PieceTypeEnum";
import { Board } from "../../src/Board/Board";
import { Queen } from "../../src/Board/Queen";
import { Knight } from "../../src/Board/Knight";
import { Pawn } from "../../src/Board/Pawn";

describe('VALID ACTIONS FOR PAWN', () => {
    // TEST 1
    test("WHITE PAWN PROMOTION AT [0][0] 8A", () => {
        //given
        const wPawn = new Pawn(PieceColor.White, PieceType.King, new Square(0, 6))
        const board = new Board();
        board.addPiece(knight);
        const game = new Game(undefined, undefined, undefined, undefined, undefined, board);
        const newMove = new Move(new Square(2, 2), new Square(0, 1), knight, null);
        //when
        const possibleMove = game.isMovePossible(newMove);
        if(possibleMove){
            newMove.    
        }
        //then
        expect(possibleMove).toBe(true);

        
        expect(gameResult).toBe(true);
    });
});