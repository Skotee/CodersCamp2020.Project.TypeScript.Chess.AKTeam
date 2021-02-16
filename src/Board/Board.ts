import { PieceColor } from "./PieceColorEnum";
import { Rook } from "./Rook";
import { Piece } from "./Piece";
import { PieceType } from "./PieceTypeEnum";
import { Square } from "./Square";
import { Pawn } from "./Pawn";
import { Knight } from "./Knight";
import { Queen } from "./Queen";
import { King } from "./King";
import { Bishop } from "./Bishop";
import { Move } from "../Game/Move";

export class Board {
  
  private _piecesOnBoard: Piece[][];
  

  constructor(
    
    pieces: Piece[][] = [[], []],
  ) {
    
    this._piecesOnBoard = pieces;

    
  }
  

  public set piecesOnBoard(pieces: Piece[][]) {
    this._piecesOnBoard = pieces;
  }

  public get piecesOnBoard(): Piece[][] {
    return this._piecesOnBoard;
  }

  public addPiece(piece: Piece): void {
    if (piece.pieceColor === PieceColor.White) {
      this._piecesOnBoard[0].push(piece);

    }
    else {
      this._piecesOnBoard[1].push(piece)

    }
    

  }

  public getPieceSet(pieceColor: PieceColor): Piece[] {
    return (pieceColor==PieceColor.White) ? this._piecesOnBoard[0] : this._piecesOnBoard[1];
  }
  public create(): void {
    //black pawns
    for (let i = 0; i < 8; i++) {
      this.addPiece(new Pawn(PieceColor.Black, PieceType.Pawn, new Square(1, i)))
    }
    for (let y = 0; y < 2; y++) {
      this.addPiece(new Rook(PieceColor.Black, PieceType.Rook, new Square(0, 0 + y * 7)));
      this.addPiece(new Knight(PieceColor.Black, PieceType.Knight, new Square(0, 1 + y * 5)))
      this.addPiece(new Bishop(PieceColor.Black, PieceType.Bishop, new Square(0, 2 + y * 3)))
    }
    this.addPiece(new Queen(PieceColor.Black, PieceType.Queen, new Square(0, 3)))
    this.addPiece(new King(PieceColor.Black, PieceType.King, new Square(0, 4)))


    //white pawns 
    for (let i = 0; i < 8; i++) {
      this.addPiece(new Pawn(PieceColor.White, PieceType.Pawn, new Square(6, i)))
    }
    for (let y = 0; y < 2; y++) {
      this.addPiece(new Rook(PieceColor.White, PieceType.Rook, new Square(7, 0 + y * 7)));
      this.addPiece(new Knight(PieceColor.White, PieceType.Knight, new Square(7, 1 + y * 5)))
      this.addPiece(new Bishop(PieceColor.White, PieceType.Bishop, new Square(7, 2 + y * 3)))

    }
    this.addPiece(new Queen(PieceColor.White, PieceType.Queen, new Square(7, 3)))
    this.addPiece(new King(PieceColor.White, PieceType.King, new Square(7, 4)))
  }
  public isSquareFree(square: Square): boolean {
    let isFree: boolean = true;
    this._piecesOnBoard.forEach((color) =>{
      color.forEach((piece)=>{
        if (piece.placeAt.row == square.row && piece.placeAt.column == square.column) {
          //console.log(piece.pieceType + "\n" + piece.placeAt.column + "\n" + piece.placeAt.row )
          isFree = false;
        }
      })
    })
    return isFree;
  }
  public isOppositeColor(square: Square, color: PieceColor): boolean {
    let isOpposite: boolean = false;
    this._piecesOnBoard.forEach((pieceSetColor) =>{
      pieceSetColor.forEach((piece)=>{
        if (piece.placeAt.row == square.row && piece.placeAt.column == square.column && piece.pieceColor != color) {
          
          isOpposite = true;
        }
      })
    })
    return isOpposite;
  }
  public updateBoard(move: Move): void{
    
    this._piecesOnBoard.forEach((set) => {
      if(set.includes(move.piece)){
        set.forEach((piece) =>{
          
          if(piece.pieceType == move.piece.pieceType && piece.placeAt == move.startSquare){
            this.cleanSquare(move);
            piece.updatePosition(move.endSquare);
          }
        })}
    })
    
  }
  public cleanSquare(move: Move): void{
    
    let pieceToClean: number = -1;
    this._piecesOnBoard.forEach((set) => {
      set.forEach((piece, i) =>{
        if(piece.placeAt == move.endSquare && move.piece.pieceType != piece.pieceType){
            pieceToClean = i;
            
          }
        })
    })
    this._piecesOnBoard[(move.piece.pieceColor==PieceColor.White)? 0: 1].splice(pieceToClean, 1);
  }
  
}
