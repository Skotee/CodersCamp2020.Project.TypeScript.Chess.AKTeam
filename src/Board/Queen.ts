import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";
import { Rook } from "./Rook";
import { Bishop } from "./Bishop";

export class Queen extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] {
    /*TO DO*/
    let moves: Square[] = [];
    let currentPosition:Square = this.placeAt;
    //Bishop
    for (let row = 0; row < 8; row++) { //|x2−x1|=|y2−y1|>0
      for (let col = 0; col < 8; col++) {
        if(Math.abs(currentPosition.row-row) === Math.abs(currentPosition.column - col)){
          moves.push(new Square(row,col))
        }         
      }   
    }

    // Rook
    // dodanie wszystkich pol w danym rzedzie
    for (let row = 0; row < 8; row++) {
      if(row != currentPosition.row){moves.push(new Square(row, currentPosition.column))}
    }
    // dodanie wszystkich pol w danej kolumnie
    for (let column = 0; column < 8; column++) {
      if(column != currentPosition.column){moves.push(new Square(currentPosition.row, column))} 
    }


    return moves;
  }
}
