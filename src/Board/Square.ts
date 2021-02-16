export class Square {
    private _row: number;
    private _column: number;

    constructor(row: number, column: number) {
        this._row = row;
        this._column = column;
    }
  
    public get row(): number {
        return this._row;
    }

    public set row(row: number) {
        this._row = row;
    }

    public get column(): number {
        return this._column;
    }

    public set column(column: number) {
        this._column = column;
    }
}