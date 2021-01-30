import { Move } from "./Move";
import { PieceColor } from "../Board/PieceColorEnum";
import { Player } from "./Player";
import { Result } from "./ResultEnum";
import { CheckStatus } from "./CheckStatusEnum";
import { Board } from "../Board/Board";

export class Game {
  private _playedMoves: Move[];
  private _turn: PieceColor;
  private _players: Player[];
  private _result: Result;
  private _checkStatus: CheckStatus;
  private _board: Board;

  constructor(
    playedMoves: Move[] = [],
    turn: PieceColor = PieceColor.White,
    players: Player[] = [],
    result: Result = Result.Unfinished,
    checkStatus: CheckStatus = CheckStatus.None,
    board: Board = new Board()
  ) {
    this._playedMoves = playedMoves;
    this._turn = turn;
    this._players = players;
    this._result = result;
    this._checkStatus = checkStatus;
    this._board = board;
  }

  public get playedMoves(): Move[] {
    return this._playedMoves;
  }

  public set playedMoves(playedMoves: Move[]) {
    this._playedMoves = playedMoves;
  }

  public get turn(): PieceColor {
    return this._turn;
  }

  public set turn(turn: PieceColor) {
    this._turn = turn;
  }

  public get players(): Player[] {
    return this._players;
  }

  public set players(players: Player[]) {
    this._players = players;
  }

  public get result(): Result {
    return this._result;
  }

  public set result(result: Result) {
    this._result = result;
  }

  public get checkStatus(): CheckStatus {
    return this._checkStatus;
  }

  public set checkStatus(checkStatus: CheckStatus) {
    this._checkStatus = checkStatus;
  }

  public get board(): Board {
    return this._board;
  }

  public set board(board: Board) {
    this._board = board;
  }

  addMove(): void {}
  create(): void {}
  isEnded(): boolean {
    return true;
  }
  operation(): void {}
  isChecked(): boolean {
    return true;
  }
  isCheckmated(): boolean {
    return true;
  }
  isStalemated(): boolean {
    return true;
  }
  isMovePossible(move: Move): boolean {
    return true;
  }
}
