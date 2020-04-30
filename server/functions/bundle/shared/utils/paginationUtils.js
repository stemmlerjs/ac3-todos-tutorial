"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../core/result");
const numberUtils_1 = require("./numberUtils");
class PaginationUtils {
    static filterByBeforeAndAfter(items, after, before) {
        const isAfterSet = !!after === true;
        const isBeforeSet = !!before === true;
        if (isAfterSet) {
            const afterIndex = items.findIndex((t) => t.id === Number(after));
            const afterIndexFound = afterIndex !== -1;
            if (afterIndexFound) {
                items = items.slice(afterIndex + 1);
            }
        }
        if (isBeforeSet) {
            const beforeIndex = items.findIndex((t) => t.id === Number(after));
            const beforeIndexFond = beforeIndex !== -1;
            if (beforeIndexFond) {
                items = items.slice(0, beforeIndex);
            }
        }
        return items;
    }
    static limitByFirstAndLast(items, first, last) {
        const isFirstSet = numberUtils_1.NumberUtils.isANumber(first);
        const isLastSet = numberUtils_1.NumberUtils.isANumber(last);
        if (isFirstSet) {
            const isFirstAPositiveNumber = numberUtils_1.NumberUtils.isANonNegativeNumber(first);
            if (!isFirstAPositiveNumber) {
                return result_1.Result.fail("First has to be greater than 0");
            }
            if (items.length > first) {
                return result_1.Result.ok(items.slice(0, first));
            }
        }
        if (isLastSet) {
            const isLastAPositiveNumber = numberUtils_1.NumberUtils.isANonNegativeNumber(last);
            if (!isLastAPositiveNumber) {
                return result_1.Result.fail("Last has to be greater than 0");
            }
            if (items.length > last) {
                return result_1.Result.ok(items.slice(0, last));
            }
        }
        return result_1.Result.ok(items);
    }
}
exports.PaginationUtils = PaginationUtils;
//# sourceMappingURL=paginationUtils.js.map