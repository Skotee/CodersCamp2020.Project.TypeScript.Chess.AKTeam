import { Board } from "./Board/Board";
import { King } from "./Board/King";
import { PieceColor } from "./Board/PieceColorEnum";
import { PieceType } from "./Board/PieceTypeEnum";
import { Queen } from "./Board/Queen";
import { Square } from "./Board/Square";
import { CheckStatus } from "./Game/CheckStatusEnum";
import { Game } from "./Game/Game";
import { Result } from "./Game/ResultEnum";



const wQueen = new Queen(PieceColor.White, PieceType.Queen, new Square(2, 2));
const wKing = new King(PieceColor.White, PieceType.King, new Square(3, 3));
const board = new Board();
board.addPiece(wQueen);
board.addPiece(wKing);

const newGame = new Game([], PieceColor.White, [], Result.Unfinished, CheckStatus.None, board);

export { newGame }


