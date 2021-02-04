import { PieceColor } from "./PieceColorEnum";
import { Piece } from "./Piece";

export class Board {
  private _squares: Piece[][];
  
  constructor(
    squares: Piece[][] = [],
  ) {
    this._squares = squares;
  }

  public get squares(): Piece[][] {
    return this._squares;
  }

  public set squares(squares: Piece[][]) {
    this._squares = squares;
  }

  public addPiece(piece: Piece): void {}

  public getPieceSet(pieceColor: PieceColor):Piece[]{
    return [];
  }
}