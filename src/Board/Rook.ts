import { PieceType } from "./PieceTypeEnum";
import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { Piece } from "./Piece";

export class Rook extends Piece {
    constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square, moved: boolean, toBeCaptured: boolean) {
        super(pieceColor, pieceType, placeAt, moved, toBeCaptured);
    }
    public validMoves(): void /*List<Square>*/ {/*TO DO*/ };
    public makeMove(): void /*Move*/ {/*TO DO*/ };
}