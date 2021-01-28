import { PieceColor } from "./PieceColorEnum";
import { Piece } from "./Piece";

export class PieceSet {
    private _piecesList: Piece[];
    private _color: PieceColor;

    constructor(piecesList: Piece[], color: PieceColor) {
        this._piecesList = piecesList
        this._color = color
    }

}