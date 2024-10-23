"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = asyncHandler;
function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}