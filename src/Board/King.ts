import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";

export class King extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, 1], [1, 0], [1, 1]
    ];

    return directions.map(([y, x]) => new Square(this.placeAt.row + y, this.placeAt.column + x));
  }

  /*TODO -> methods for validaste if king moved -> important for castling */

}
