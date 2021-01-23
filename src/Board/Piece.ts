abstract class Piece{
    pieceColor:PieceColor;
    pieceType: PieceType;
    placeAt: Square;
    moved: boolean;
    toBeCaptured: boolean;
    validMoves(): void{};
    makeMove():void{};


}