import { Square } from "./Square";
import { PieceColor } from "./PieceColorEnum";
import { PieceType } from "./PieceTypeEnum";
import { Move } from "../Game/Move";

export abstract class Piece {
  private _pieceColor: PieceColor;
  private _pieceType: PieceType;
  private _placeAt: Square;
  private _moved: boolean;
  private _toBeCaptured: boolean;

  constructor(pieceColor: PieceColor, pieceType: PieceType, placeAt: Square, moved: boolean, toBeCaptured: boolean) {
    this._pieceColor = pieceColor;
    this._pieceType = pieceType;
    this._placeAt = placeAt;
    this._moved = moved;
    this._toBeCaptured = toBeCaptured;
  }

  public get pieceColor(): PieceColor {
    return this._pieceColor;
  }

  public set pieceColor(pieceColor: PieceColor) {
    this._pieceColor = pieceColor;
  }

  public get pieceType(): PieceType {
    return this._pieceType;
  }

  public set pieceType(pieceType: PieceType) {
    this._pieceType = pieceType;
  }

  public get placeAt(): Square {
    return this._placeAt;
  }

  public set placeAt(placeAt: Square) {
    this._placeAt = placeAt;
  }

  public get moved(): boolean {
    return this._moved;
  }

  public set moved(moved: boolean) {
    this._moved = moved;
  }

  public get toBeCaptured(): boolean {
    return this._toBeCaptured;
  }

  public set toBeCaptured(toBeCaptured: boolean) {
    this._toBeCaptured = toBeCaptured;
  }

  public validMoves(): void /*List<Square>*/ {/*TO DO*/ };
  public makeMove(): void /*Move*/ {/*TO DO*/ };
}