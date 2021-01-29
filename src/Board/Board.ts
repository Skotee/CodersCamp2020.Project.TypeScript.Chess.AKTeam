import { PieceSet } from "./PieceSet";
import { PieceColor } from "./PieceColorEnum";
import { Piece } from "./Piece";

export class Board {
  private _squares: Piece[][];
  private _pieceSets: PieceSet[];
  private _pieceSetOnTop: PieceColor;

  constructor(
    squares: Piece[][] = [],
    pieceSets: PieceSet[] = [],
    pieceSetOnTop: PieceColor = PieceColor.Black
  ) {
    this._squares = squares;
    this._pieceSets = pieceSets;
    this._pieceSetOnTop = pieceSetOnTop;
  }

  public get squares(): Piece[][] {
    return this._squares;
  }

  public set squares(squares: Piece[][]) {
    this._squares = squares;
  }

  public get pieceSets(): PieceSet[] {
    return this._pieceSets;
  }

  public set pieceSets(pieceSets: PieceSet[]) {
    this._pieceSets = pieceSets;
  }

  public get pieceSetOnTop(): PieceColor {
    return this._pieceSetOnTop;
  }

  public set pieceSetOnTop(pieceSetOnTop: PieceColor) {
    this._pieceSetOnTop = pieceSetOnTop;
  }

  public addPiece(piece: Piece): void {}
}
