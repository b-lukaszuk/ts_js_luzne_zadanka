import isInt from "./isInt";

interface Dictionary<T> {
    [Key: string]: T;
};

class BalancedTernary {
    private _str2d: Dictionary<number> = { "+": 1, "-": -1, '0': 0 };
    private _d2str: Dictionary<string> = { "1": "+", "-1": "-", "0": "0" };
    constructor() {
        // TODO
    }
};

export default BalancedTernary;
