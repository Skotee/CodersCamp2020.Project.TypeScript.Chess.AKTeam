import { Move } from "./Move";
import { PieceColor } from "../Board/PieceColorEnum";
import { Player } from "./Player";
import { Result } from "./ResultEnum";
import { CheckStatus } from "./CheckStatusEnum";
import { Board } from "../Board/Board";
import { Square } from "../Board/Square";
import { King } from "../Board/King";
import { PieceType } from "../Board/PieceTypeEnum";
import { Piece } from "../Board/Piece";

export class Game {
  private _playedMoves: Move[];
  private _turn: PieceColor;
  private _players: Player[];
  private _result: Result;
  private _checkStatus: CheckStatus;
  private _board: Board;

  constructor(
    playedMoves: Move[] = [],
    turn: PieceColor = PieceColor.White,
    players: Player[] = [],
    result: Result = Result.Unfinished,
    checkStatus: CheckStatus = CheckStatus.None,
    board: Board = new Board()
  ) {
    this._playedMoves = playedMoves;
    this._turn = turn;
    this._players = players;
    this._result = result;
    this._checkStatus = checkStatus;
    this._board = board;
  }

  public get playedMoves(): Move[] {
    return this._playedMoves;
  }

  public set playedMoves(playedMoves: Move[]) {
    this._playedMoves = playedMoves;
  }

  public get turn(): PieceColor {
    return this._turn;
  }

  public set turn(turn: PieceColor) {
    this._turn = turn;
  }

  public get players(): Player[] {
    return this._players;
  }

  public set players(players: Player[]) {
    this._players = players;
  }

  public get result(): Result {
    return this._result;
  }

  public set result(result: Result) {
    this._result = result;
  }

  public get checkStatus(): CheckStatus {
    return this._checkStatus;
  }

  public set checkStatus(checkStatus: CheckStatus) {
    this._checkStatus = checkStatus;
  }

  public get board(): Board {
    return this._board;
  }

  public set board(board: Board) {
    this._board = board;
  }

  addMove(move: Move): void { }

  isEnded(): boolean {
      if ((this.isStalemated() == true) || (this.isCheckmated() == true) || (this.checkTripleMoveRule() == true) ||
        (this.checkFiftyMoveRule() == true)) {
        return true;
      } else {
        return false;
      }
    }

  isChecked(): boolean {
    return true;
  }
  isCheckmated(): boolean {
    return true;
  }
  isStalemated(): boolean {
    return true;
  }
  getAvailableSquares(piece: Piece): Square[] {
    let allSquares:Square[] = piece.validMoves();
    let availableSquares:Square[] = [];
    availableSquares.forEach((e) => {
      if(this.isMovePossible(new Move(piece.placeAt, e, piece, null))){
        availableSquares.push(e);
      }
    })
    
    return availableSquares;
  }

  isCastlePossible(): boolean { 
    return true;
   }


  checkFiftyMoveRule(): boolean { //czy zasada 50 ruchów bez bicia lub ruchu pionem jest prawdziwa
    const movesArray = this.playedMoves;
    if (movesArray.length >= 100) {
      for (let i = 0; i < movesArray.length; i++) {
        if ((movesArray[i].capturePiece != null) || (movesArray[i].piece.pieceType == PieceType.Pawn)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  checkTripleMoveRule(): boolean {
    return true;
  }
  pawnPromotion(): Piece {
    return new King(PieceColor.Black, PieceType.King, new Square(6,6));
  }

  isMovePossiblePawn(move: Move): boolean{return true;}
  isMovePossibleRook(move: Move): boolean{return true;}
  isMovePossibleKnight(move: Move): boolean{return true;}
  isMovePossibleBishop(move: Move): boolean{return true;}
  isMovePossibleKing(move: Move): boolean{return true;}
  isMovePossibleQueen(move: Move): boolean{return true;}

  
  isMovePossible(move: Move): boolean {
    let pieceType = move.piece.pieceType;
    switch (pieceType) {
      case PieceType.Pawn:
        return this.isMovePossiblePawn(move);
        
      case PieceType.Rook:
        return this.isMovePossibleRook(move);
        
      case PieceType.Knight:
        return this.isMovePossibleKnight(move);
        
      case PieceType.Bishop:
        return this.isMovePossibleBishop(move);
        
      case PieceType.King:
        return this.isMovePossibleKing(move);
        
      case PieceType.Queen:
        return this.isMovePossibleQueen(move);
        
      default:
        return false;    
    }
     //sprawdza czy nowy ruch - endSquare:Square z klasy Move, znajduje sie w tablicy, którą zwraca getAvailableSquares(square: Square): Square[]
  }
}
