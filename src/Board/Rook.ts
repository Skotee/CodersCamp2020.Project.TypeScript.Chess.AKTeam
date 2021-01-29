import { PieceType } from "./PieceTypeEnum";
import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { Piece } from "./Piece";

export class Rook extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): void /*List<Square>*/ {
    /*TO DO*/
  }

  public makeMove(): void /*Move*/ {
    /*TO DO*/
  }
}
