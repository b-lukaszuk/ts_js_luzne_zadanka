import { d2t } from "./degree";
import { g2t } from "./gradian";
import { m2t } from "./mil";
import { r2t } from "./radian";
import { t2d, t2g, t2m, t2r } from "./turns";

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

    public set gradians(gradians: number) {
        this._setInternals(g2t(gradians));
    }

    public get gradians(): number {
        return t2g(this._getTurns());
    }

    public set mils(mils: number) {
        this._setInternals(m2t(mils));
    }

    public get mils(): number {
        return t2m(this._getTurns());
    }

    public set radians(radians: number) {
        this._setInternals(r2t(radians));
    }

    public get radians(): number {
        return t2r(this._getTurns());
    }
}

export default Angle;
