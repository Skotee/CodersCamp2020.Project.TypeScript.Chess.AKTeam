import { Board } from "./Board/Board";
import { PieceColor } from "./Board/PieceColorEnum";
import { CheckStatus } from "./Game/CheckStatusEnum";
import { Game } from "./Game/Game";
import { Result } from "./Game/ResultEnum";

const newGame = new Game([], PieceColor.White, [], Result.Unfinished, CheckStatus.None, new Board());

export { newGame }


