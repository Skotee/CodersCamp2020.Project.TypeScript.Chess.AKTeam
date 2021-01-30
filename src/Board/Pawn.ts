import { Square } from "./Square";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Piece } from "./Piece";
import { MoveDirection } from "./MoveDirectionEnum";
import { Move } from "../Game/Move";

export class Pawn extends Piece {

  private _promoted: boolean;
  private _moveDirection: MoveDirection;

  constructor(
    pieceColor: PieceColor,
    pieceType: PieceType,
    placeAt: Square,
    moved: boolean,
  ) {
    super(pieceColor, pieceType, placeAt, moved);
    this._promoted = false;
    this._moveDirection = (this.pieceColor === PieceColor.White) ? MoveDirection.ascending : MoveDirection.descending;
  }

  public validMoves(): void /*List<Square>*/ {
    /*TO DO*/
  }

  public makeMove(): void /*Move*/ {
    /*TO DO*/
    switch (this.pieceColor){
      
    }

  }
  public moveDirection(): void /*MoveDirection*/{
    // TO DO
  };
  public promotionCheck():boolean{
    // TO DO
    return this._promoted;
  }
  public promoteTo(): void /*Piece*/{
    // TO DO

  }
}
