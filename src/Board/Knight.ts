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
    let moves = directions.map(([y, x]) => new Square(this.placeAt.row + y, this.placeAt.column + x))
    
    return moves.filter(this.isOutOfBoard); // dodac warunki sprawdzajace dla skoczka czy validMoves sa na planszy
  }
  public isOutOfBoard(e:Square): boolean{
    return (e.row < 8 && e.column < 8) && (e.row >= 0 && e.column >= 0);
  }
   
}
