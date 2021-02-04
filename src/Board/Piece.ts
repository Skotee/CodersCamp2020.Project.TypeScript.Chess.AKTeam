import { Square } from "./Square";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Move } from "../Game/Move";

export abstract class Piece {
  private _pieceColor: PieceColor;
  private _pieceType: PieceType;
  private _placeAt: Square;

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

  public abstract validMoves(): Square[];
  public abstract updatePosition(square: Square): Move;
}
