import { Square } from "./Square";
import { PieceSet } from "./PieceSet";
import { PieceColor } from "./PieceColorEnum";

export class Board {
    private _squares: Square[];
    private _pieceSets: PieceSet[];
    private _pieceSetOnTop: PieceColor;

    constructor(squares: Square[], pieceSets: PieceSet[], pieceSetOnTop: PieceColor) {
        this._squares = squares
        this._pieceSets = pieceSets
        this._pieceSetOnTop = pieceSetOnTop
    }

    public get squares(): Square[] {
        return this._squares;
    }

    public set squares(squares: Square[]) {
        this._squares = squares;
    }

    public get pieceSets(): PieceSet[] {
        return this._pieceSets;
    }

    public set pieceSets(pieceSets: PieceSet[]) {
        this._pieceSets = pieceSets;
    }

    public get pieceSetOnTop(): PieceColor {
        return this._pieceSetOnTop;
    }

    public set pieceSetOnTop(pieceSetOnTop: PieceColor) {
        this._pieceSetOnTop = pieceSetOnTop;
    }
}