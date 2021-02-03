import { Square } from "./Square";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";
import { MoveDirection } from "./MoveDirectionEnum";

export class Pawn extends Piece {
  private moveDirection:MoveDirection;
  private promoted = false; // do przemyslenia jeszcze jak chcemy rozwiazac
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
    (pieceColor === PieceColor.White) ? this.moveDirection=MoveDirection.ascending : this.moveDirection=MoveDirection.descending;
  }

  public validMoves(): Square[] {
    /*TO DO*/
    return [];
  }

  public updatePosition(square: Square): Move {
    /*TO DO*/
    return new Move(this.placeAt, square, this, null);
  }

}
