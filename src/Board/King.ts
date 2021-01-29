import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";

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
    // Tutaj potrzebny nam będzie this.board,
    // żeby wiedzieć, gdzie stoją figury.
    // - Pionki mogą blokować siebie nawzajem.
    // - Król musi sprawdzać isCheckmate dla pola.
    return directions.map(([y, x]) => new Square(this.placeAt.row + y, this.placeAt.column + x));
  }

  public makeMove(): void /*Move*/ {/*TO DO*/ }
}
