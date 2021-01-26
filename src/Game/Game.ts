class Game {
    playedMoves: Move[];
    turn: PieceColor;
    players: Player[];
    result: Result;
    checkStatus: CheckStatus;
    constructor(parameters) {
        
    }
    addMove():void{};
    create():void{};
    isEnded():boolean{return true};
    operation():void{};
    isCheckmated():boolean{return true};
}