import { Square } from "../Board/Square";
import { Piece } from "../Board/Piece";
import { PieceColor } from "../Board/PieceColorEnum";

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

    isPawnPromotion(endSquare: Square, piece: Piece):boolean{
        if(piece.pieceColor === PieceColor.White && endSquare.row === 0){
            for (let col = 0; col < 8; col++) {
                if (endSquare.column == col) {
                    return true
                } 
            }
        }
        if(piece.pieceColor === PieceColor.Black && endSquare.row === 7){
            for (let col = 0; col < 8; col++) {
                if (endSquare.column == col) {
                    return true
                } 
            }
        }
        return false;
        
    };
    is2FieldPawnMove(startSquare: Square, piece:Piece):boolean{
        if(piece.pieceColor === PieceColor.White && startSquare.row === 6){
            for (let col = 0; col < 8; col++) {
                if (startSquare.column == col) {
                    return true
                } 
            }
        }
        if(piece.pieceColor === PieceColor.Black && startSquare.row === 1){
            for (let col = 0; col < 8; col++) {
                if (startSquare.column == col) {
                    return true
                } 
            }
        }
        return false;
        
    };
}