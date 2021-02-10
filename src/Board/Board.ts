import { PieceColor } from "./PieceColorEnum";
import { Rook } from "./Rook";
import { Piece } from "./Piece";
import { PieceType } from "./PieceTypeEnum";
import { Square } from "./Square";
import { Move } from "../Game/Move";
import { Pawn } from "./Pawn";
import { Game } from "../Game/Game";
import { Knight } from "./Knight";
import { Queen } from "./Queen";
import { King } from "./King";
import { Bishop } from "./Bishop";

export class Board {
  private _squares: Piece[][];
  
  constructor(
    squares: Piece[][] = [[],[]],
  ) {
    this._squares = squares;
  }

  public get squares(): Piece[][] {
    return this._squares;
  }

  public set squares(squares: Piece[][]) {
    this._squares = squares;
  }

  public addPiece(piece: Piece): void {
    if(piece.pieceColor === PieceColor.White){
      this._squares[0].push(piece);
    }
    else{
      this._squares[1].push(piece)
    }
    
  }

  public getPieceSet(pieceColor: PieceColor):Piece[]{
    return [];
  }
  public create(): void{
    //black pawns
    for (let i = 0; i < 8; i++) {
      this.addPiece(new Pawn(PieceColor.Black, PieceType.Pawn, new Square(1, i)))  
    }
    for (let y = 0; y < 2; y++) {
      this.addPiece(new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 0 + y*7)));
      this.addPiece(new Knight(PieceColor.Black, PieceType.Knight, new Square(0, 1 + y*5)))
      this.addPiece(new Bishop(PieceColor.Black, PieceType.Bishop, new Square(0, 2 + y* 3)))
    }
    this.addPiece(new Queen(PieceColor.Black, PieceType.Queen, new Square(0, 3))) 
    this.addPiece(new King(PieceColor.Black, PieceType.King, new Square(0, 4))) 

    
    //white pawns 
    for (let i = 0; i < 8; i++) {
      this.addPiece(new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, i)))  
    }
    for (let y = 0; y < 2; y++) {
      this.addPiece(new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0 + y*7)));
      this.addPiece(new Knight(PieceColor.White, PieceType.Knight, new Square(7, 1 + y*5)))
      this.addPiece(new Bishop(PieceColor.White, PieceType.Bishop, new Square(7, 2 + y* 3)))
      
    }
    this.addPiece(new Queen(PieceColor.White, PieceType.Queen, new Square(7, 3))) 
    this.addPiece(new King(PieceColor.White, PieceType.King, new Square(7, 4))) 
  }
}
