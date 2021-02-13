import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";

export class Knight extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] {
    const directions = [
      [-2, 1], [-1, 2], [1, 2],
      [2, 1], [2, -1],
      [1, -2], [-1, -2], [-2, 1]
    ];

    return directions.map(([y, x]) => new Square(this.placeAt.row + y, this.placeAt.column + x)); // dodac warunki sprawdzajace dla skoczka czy validMoves sa na planszy
  }

  
}
