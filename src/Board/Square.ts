export class Square {
    private _row: Number;
    private _column: Number;

    constructor(row: Number, column: Number) {
        this._row = row;
        this._column = column;
    }

    public get row(): Number {
        return this._row;
    }

    public set row(row: Number) {
        this._row = row;
    }

    public get column(): Number {
        return this._column;
    }

    public set column(column: Number) {
        this._column = column;
    }
}