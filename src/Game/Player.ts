import { PieceColor } from "../Board/PieceColorEnum"

export class Player {
    private _name: string;
    private _pieceColor: PieceColor;

    constructor(name: string, pieceColor: PieceColor) {
        this._name = name;
        this._pieceColor = pieceColor;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get pieceColor(): PieceColor {
        return this._pieceColor;
    }

    public set pieceColor(pieceColor: PieceColor) {
        this._pieceColor = pieceColor;
    }
}