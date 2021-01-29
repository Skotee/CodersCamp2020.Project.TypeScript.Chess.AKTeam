import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";

export class King extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): void /*List<Square>*/ {
    /*TO DO*/
  }
  /*TODO -> methods for validaste if king moved -> important for castling */

  public makeMove(): void /*Move*/ {
    /*TO DO*/
  }
}
