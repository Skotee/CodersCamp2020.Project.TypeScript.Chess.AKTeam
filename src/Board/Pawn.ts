import { Square } from "./Square";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";
import { MoveDirection } from "./MoveDirectionEnum";

export class Pawn extends Piece {
  // private moveDirection:MoveDirection;
  private promoted = false; // do przemyslenia jeszcze jak chcemy rozwiazac
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
    // (pieceColor === PieceColor.White) ? this.moveDirection=MoveDirection.ascending : this.moveDirection=MoveDirection.descending;
  }

  public validMoves(): Square[] {
    const directionsForWhite = [
                [-2, 0],
      [-1, -1], [-1, 0], [-1, 1],
    ];
    const directionsForBlack = [
    [1, 1], [1, 0], [1, 1],
            [2, 0], 
    ];

    return ((this.pieceColor === PieceColor.White) ? directionsForWhite : directionsForBlack).map(([y, x]) => new Square(this.placeAt.row + y, this.placeAt.column + x));
  }
}
