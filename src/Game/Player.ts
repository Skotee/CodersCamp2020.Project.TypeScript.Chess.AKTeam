import { PieceColor } from "../Board/PieceColorEnum"

export class Player {
    private _name: string;
    private _chessSet: string;
    private _pieceColor: PieceColor;

    constructor(name: string, chessSet: string, pieceColor: PieceColor) {
        this._name = name;
        this._chessSet = chessSet;
        this._pieceColor = pieceColor;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get chessSet(): string {
        return this._chessSet;
    }

    public set chessSet(chessSet: string) {
        this._chessSet = chessSet;
    }

    public get pieceColor(): PieceColor {
        return this._pieceColor;
    }

    public set pieceColor(pieceColor: PieceColor) {
        this._pieceColor = pieceColor;
    }
}