import { Square } from "./Square";
import { Board } from "./Board";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Move } from "../Game/Move";

export abstract class Piece {
  private _pieceColor: PieceColor;
  private _pieceType: PieceType;
  private _placeAt: Square;
  private _board: Board | null = null;

  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square) {
    this._pieceColor = pieceColor;
    this._pieceType = pieceType;
    this._placeAt = placeAt;
  }

  public get pieceColor(): PieceColor {
    return this._pieceColor;
  }

  public get pieceType(): PieceType {
    return this._pieceType;
  }

  public get placeAt(): Square {
    return this._placeAt;
  }

  public set placeAt(placeAt: Square) {
    this._placeAt = placeAt;
  }

  public get board(): Board | null {
    return this._board;
  }

  public set board(board: Board | null) {
    this._board = board;
  }

  public validMoves(): void /*List<Square>*/ {
    /*TODO*/
  }
  public makeMove(): void /*Move*/ {
    /*TODO*/
  }
}
