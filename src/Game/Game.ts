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

  addMove(move: Move): void {
    this._playedMoves.push(move);
  }

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
    let allSquares: Square[] = piece.validMoves();
    let availableSquares: Square[] = [];
    availableSquares.forEach((e) => {
      if (this.isMovePossible(new Move(piece.placeAt, e, piece, null))) {
        availableSquares.push(e);
      }
    })

    return availableSquares;
  }

  isSquareAttacked(square: Square): boolean {
    return true;
  }

  isCastlePossible(move: Move): boolean { //czy roszada jest możliwa
    const pieceType = move.piece.pieceType;
    const pieceColor = move.piece.pieceColor;
    const start = move.startSquare;
    const end = move.endSquare;
    const piecesArray = this._board.squares;
    const playedMoves = this._playedMoves;

    if (pieceType == PieceType.King) { //czy to na pewno król
      for (let i = 0; i < playedMoves.length; i++) { //czy król, którym próbujemy zrobić roszadę się ruszył
        if (playedMoves[i].piece.pieceType == PieceType.King && playedMoves[i].piece.pieceColor == pieceColor) {
          return false;
        }

        //którą roszadę chcemy wykonać(długą czy krótką) i dla jakiego koloru
        if (start == new Square(7, 4) && end == new Square(7, 2)) {//długa roszada dla białych = czy 7,1 7,2 i 7,3 jest puste, a 7,2 i 7,3 wolne od szacha
          if (isRookMoved(new Square(7, 0), PieceColor.White) == true) {  //czy wieża z którą chcemy zrobić roszadę się ruszyła
            return false;
          } else if (isSquaresEmpty([new Square(7, 1), new Square(7, 2), new Square(7, 3)]) // jeżeli wieża z którą chcemy zrobić roszadę się nie ruszyła, to sprawdzamy, czy pola pomiędzy królem a tą wieżą są puste i czy nie są atakowane
            && this.isSquareAttacked(new Square(7, 2)) == false
            && this.isSquareAttacked(new Square(7, 3)) == false) {
            return true;
          }
        } else if (start == new Square(7, 4) && end == new Square(7, 6)) {//krótka roszada dla białych = czy 7,5 i 7,6 jest puste i wolne od szacha
          if (isRookMoved(new Square(7, 7), PieceColor.White) == true) { //czy wieża z którą chcemy zrobić roszadę się ruszyła
            return false;
          } else if (isSquaresEmpty([new Square(7, 5), new Square(7, 6)])
            && this.isSquareAttacked(new Square(7, 5)) == false
            && this.isSquareAttacked(new Square(7, 6)) == false) {
            return true;
          }
        } else if (start == new Square(0, 4) && end == new Square(0, 2)) {//długa roszada dla czarnych = czy 0,1 0,2 i 0,3 jest puste i czy 0,2 i 0,3 jest wolne od szacha
          if (isRookMoved(new Square(0, 0), PieceColor.Black) == true) { //czy wieża z którą chcemy zrobić roszadę się ruszyła
            return false;
          } else if (isSquaresEmpty([new Square(0, 1), new Square(0, 2), new Square(0, 3)])
            && this.isSquareAttacked(new Square(0, 2)) == false
            && this.isSquareAttacked(new Square(0, 3)) == false) {
            return true;
          }
        } else if (start == new Square(0, 4) && end == new Square(0, 6)) {//krótka roszada dla czarnych = czy 0, 5 i 0, 6 jest puste i wolne od szacha
          if (isRookMoved(new Square(0, 7), PieceColor.Black) == true) { //czy wieża z którą chcemy zrobić roszadę się ruszyła
            return false;
          } else if (isSquaresEmpty([new Square(0, 5), new Square(0, 6)])
            && this.isSquareAttacked(new Square(0, 5)) == false
            && this.isSquareAttacked(new Square(0, 6)) == false) {
            return true; {
            }
          }
        }
      }

      function isRookMoved(square: Square, rookPieceColor: PieceColor): boolean { //funkcja pomocnicza
        for (let i = 0; i < playedMoves.length; i++) {
          if (playedMoves[i].piece.pieceType == PieceType.Rook && playedMoves[i].piece.pieceColor == rookPieceColor && playedMoves[i].startSquare == square) {
            return true;
          }
        }
        return false;
      }

      function isSquaresEmpty(squares: Square[]) { //funkcja pomocnicza
        if (squares.length == 3) {
          for (let i = 0; i < piecesArray.length; i++) {
            for (let j = 0; j < piecesArray[i].length; j++) {
              if (piecesArray[i][j].placeAt != squares[0] && piecesArray[i][j].placeAt != squares[1] && piecesArray[i][j].placeAt != squares[2]) {
                return true;
              }
            }
          }
          return false;
        } else if (squares.length == 2) {
          for (let i = 0; i < piecesArray.length; i++) {
            for (let j = 0; j < piecesArray[i].length; j++) {
              if (piecesArray[i][j].placeAt != squares[0] && piecesArray[i][j].placeAt != squares[1]) {
                return true;
              }
            }
          }
          return false;
        }
      }
    }
    return false;
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
    return new King(PieceColor.Black, PieceType.King, new Square(6, 6));
  }

  isMovePossiblePawn(move: Move): boolean { return true; }
  isMovePossibleRook(move: Move): boolean { return true; }
  isMovePossibleKnight(move: Move): boolean { return true; }
  isMovePossibleBishop(move: Move): boolean { return true; }
  isMovePossibleKing(move: Move): boolean { return true; }
  isMovePossibleQueen(move: Move): boolean { return true; }


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
