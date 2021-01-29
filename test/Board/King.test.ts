import { Board } from "../../src/Board/Board";
import { Square } from "../../src/Board/Square";
import { PieceColor } from "../../src/Board/PieceColorEnum";
import { King } from "../../src/Board/King";
import { PieceSet } from "../../src/Board/PieceSet";
import { PieceType } from "../../src/Board/PieceTypeEnum";

it("can move to empty square", () => {
    const square1 = new Square(0, 0);
    const square2 = new Square(0, 1);
    const king = new King(PieceColor.Black,  PieceType.King ,square1);
    const pieceSet = new PieceSet([king], PieceColor.Black);
    const board = new Board([[square1, square2]], [pieceSet], PieceColor.Black);
    king.board = board;
    expect(king.validMoves()).toContainEqual(square2);
});

it("doesn't try to move to itself", () => {
    const square1 = new Square(0, 0);
    const king = new King(PieceColor.Black,  PieceType.King ,square1);
    const pieceSet = new PieceSet([king], PieceColor.Black);
    const board = new Board([[square1]], [pieceSet], PieceColor.Black);
    king.board = board;
    expect(king.validMoves()).not.toContainEqual(square1);
});
