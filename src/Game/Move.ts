import { Square } from "../Board/Square";
import { Piece } from "../Board/Piece";

export class Move {
    private _startSquare: Square;
    private _endSquare: Square;
    private _piece: Piece;
    private _capturePiece: Piece | null;

    constructor(startSquare: Square, endSquare: Square, piece: Piece, capturePiece: Piece | null) {
        this._startSquare = startSquare;
        this._endSquare = endSquare;
        this._piece = piece;
        this._capturePiece = capturePiece;
    }

    public get startSquare(): Square {
        return this._startSquare;
    }

    public set startSquare(startSquare: Square) {
        this._startSquare = startSquare;
    }

    public get endSquare(): Square {
        return this._endSquare;
    }

    public set endSquare(endSquare: Square) {
        this._endSquare = endSquare;
    }

    public get piece(): Piece {
        return this._piece;
    }

    public set piece(piece: Piece) {
        this._piece = piece;
    }

    public get capturePiece(): Piece | null {
        return this._capturePiece;
    }

    public set capturePiece(capturePiece: Piece | null) {
        this._capturePiece = capturePiece;
    }

    isPawnPromotion():boolean{return true};
    is2FieldPawnMove():boolean{return true};
}