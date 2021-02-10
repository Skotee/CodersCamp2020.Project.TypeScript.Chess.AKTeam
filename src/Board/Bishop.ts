import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";

export class Bishop extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] {
    let moves: Square[] = [];
    let currentPosition:Square = this.placeAt;
    for (let row = 0; row < 8; row++) { //|x2−x1|=|y2−y1|>0
      for (let col = 0; col < 8; col++) {
        if(Math.abs(currentPosition.row-row) === Math.abs(currentPosition.column - col)){
          moves.push(new Square(row,col))
        }         
      }   
    }
    
    return moves;
    
  }  
}
