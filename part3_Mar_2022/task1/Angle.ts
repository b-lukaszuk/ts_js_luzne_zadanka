import { d2t } from "./degree";
import { t2d } from "./turns";

class Angle {
    private _turns: number = 0;
    private _negative: boolean = false;

    constructor(turns: number = 0) {
        this._setInternals(turns);
    }

    private _setInternals(turns: number = 0): void {
        turns = (Math.abs(turns) > 1) ? (turns % 1) : turns;
        if (turns < 0) {
            this._turns = 1 - turns;
            this._negative = true;
        } else {
            this._turns = turns;
            this._negative = false;
        }
    }

    private _getTurns(): number {
        return this._negative ? (1 - this._turns) : this._turns;
    }

    public set degrees(degrees: number) {
        this._setInternals(d2t(degrees));
    }

    public get degrees(): number {
        return t2d(this._getTurns());
    }
}

export default Angle;
