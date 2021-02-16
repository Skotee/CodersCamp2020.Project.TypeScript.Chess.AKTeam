import { PieceType } from "./PieceTypeEnum";
import { PieceColor } from "./PieceColorEnum";
import { Square } from "./Square";
import { Piece } from "./Piece";
import { Move } from "../Game/Move";

export class Rook extends Piece {
  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    super(pieceColor, pieceType, placeAt);
  }

  public validMoves(): Square[] { //zwraca listę dostępnych kwadratów na które może się bierka przenieść
    let moves: Square[] = [];
    let currentPosition:Square = this.placeAt;
    // dodanie wszystkich pol w danym rzedzie
    for (let row = 0; row < 8; row++) {
      if(row != currentPosition.row){moves.push(new Square(row, currentPosition.column))}
    }
    // dodanie wszystkich pol w danej kolumnie
    for (let column = 0; column < 8; column++) {
      if(column != currentPosition.column){moves.push(new Square(currentPosition.row, column))} 
    }
    
    return moves;
  } //na końcu validMoves sprawdzać,czy nie został wykonany ruch poza szachownicę
  //sprawdzamy także, czy występuje szach. Jeśli tak to blokujemy ruchy wszystkich bierek oprócz Króla
}
