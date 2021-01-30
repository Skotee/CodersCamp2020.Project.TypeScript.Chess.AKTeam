type RangeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export class Square {
    private _row: RangeType;
    private _column: RangeType;

    constructor(row: RangeType, column: RangeType) {
        this._row = row;
        this._column = column;
    }

    public get row(): RangeType {
        return this._row;
    }

    public set row(row: RangeType) {
        this._row = row;
    }

    public get column(): RangeType {
        return this._column;
    }

    public set column(column: RangeType) {
        this._column = column;
    }
}