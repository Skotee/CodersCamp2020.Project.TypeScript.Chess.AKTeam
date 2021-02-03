import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";

export class Queen extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] {
    /*TO DO*/
    return [];
  }

  public makeMove(square: Square): Move {
    /*TO DO*/
    return new Move(this.placeAt, square, this, null);
  }
}
