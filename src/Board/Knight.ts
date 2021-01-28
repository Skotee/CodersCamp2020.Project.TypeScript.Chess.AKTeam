import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";

export class Knight extends Piece {
    constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square, moved: boolean, toBeCaptured: boolean) {
        super(pieceColor, pieceType, placeAt, moved, toBeCaptured);
    }

    public validMoves(): void /*List<Square>*/ {/*TO DO*/ };
    public makeMove(): void /*Move*/ {/*TO DO*/ };
}