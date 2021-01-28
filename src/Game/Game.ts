import { Move } from "./Move";
import { PieceColor } from "../Board/PieceColorEnum";
import { Player } from "./Player";
import { Result } from "./ResultEnum";
import { CheckStatus } from "./CheckStatusEnum";

export class Game {
    private _playedMoves: Move[];
    private _turn: PieceColor;
    private _players: Player[];
    private _result: Result;
    private _checkStatus: CheckStatus;

    constructor(playedMoves: Move[], turn: PieceColor, players: Player[], result: Result, checkStatus: CheckStatus) {
        this._playedMoves = playedMoves;
        this._turn = turn;
        this._players = players;
        this._result = result;
        this._checkStatus = checkStatus;
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

    addMove(): void { };
    create(): void { };
    isEnded(): boolean { return true };
    operation(): void { };
    isCheckmated(): boolean { return true };
    isStalemated(): boolean { return true };
}