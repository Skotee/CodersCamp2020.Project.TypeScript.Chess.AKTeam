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
        set.forEach((piece) =>{
          
          if(piece.pieceType == move.piece.pieceType && piece.placeAt.column == move.startSquare.column && piece.placeAt.row == move.startSquare.row){
            this.cleanSquare(move);
            piece.updatePosition(move.endSquare);
          }
        })
    })
    
  }
  public cleanSquare(move: Move): void{
    let colorNumber:number = (move.piece.pieceColor == PieceColor.Black ? 0 : 1);
    for (var i = this._piecesOnBoard[colorNumber].length - 1; i >= 0; i--) {
      if (this._piecesOnBoard[colorNumber][i].placeAt.column == move.endSquare.column && this._piecesOnBoard[colorNumber][i].placeAt.row == move.endSquare.row){
        this._piecesOnBoard[colorNumber].splice(i, 1);
        return;
      }
    }
  }

  public createCopy(): Board{
    let copyBoard: Board = new Board();
    for (let index = 0; index < this._piecesOnBoard[0].length; index++) {
      let element: Piece = this._piecesOnBoard[0][index]
      switch (element.pieceType) {
        case PieceType.Pawn:
          copyBoard.addPiece(new Pawn(PieceColor.White, PieceType.Pawn, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.King:
          copyBoard.addPiece(new King(PieceColor.White, PieceType.King, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Queen:
          copyBoard.addPiece(new Queen(PieceColor.White, PieceType.Queen, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Rook:
          copyBoard.addPiece(new Rook(PieceColor.White, PieceType.Rook, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Bishop:
          copyBoard.addPiece(new Bishop(PieceColor.White, PieceType.Bishop, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Knight:
          copyBoard.addPiece(new Knight(PieceColor.White, PieceType.Knight, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        default:
          break;
      }
    }

    for (let index = 0; index < this._piecesOnBoard[1].length; index++) {
      let element: Piece = this._piecesOnBoard[1][index]
      switch (element.pieceType) {
        case PieceType.Pawn:
          copyBoard.addPiece(new Pawn(PieceColor.Black, PieceType.Pawn, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.King:
          copyBoard.addPiece(new King(PieceColor.Black, PieceType.King, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Queen:
          copyBoard.addPiece(new Queen(PieceColor.Black, PieceType.Queen, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Rook:
          copyBoard.addPiece(new Rook(PieceColor.Black, PieceType.Rook, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Bishop:
          copyBoard.addPiece(new Bishop(PieceColor.Black, PieceType.Bishop, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        case PieceType.Knight:
          copyBoard.addPiece(new Knight(PieceColor.Black, PieceType.Knight, new Square(element.placeAt.row, element.placeAt.column)));
          break;
        default:
          break;
      }
    }

    return copyBoard;
  }  
}
