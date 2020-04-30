"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberUtils {
    static isANumber(num) {
        return !isNaN(num);
    }
    static isANonNegativeNumber(num) {
        return !isNaN(num) && num >= 0;
    }
}
exports.NumberUtils = NumberUtils;
//# sourceMappingURL=numberUtils.js.map