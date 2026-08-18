"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailValid = isEmailValid;
exports.isNilaiValid = isNilaiValid;
function isEmailValid(email) {
    return /^[a-zA-Z0-0._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email);
}
function isNilaiValid(nilai) {
    return nilai >= 0 || nilai <= 100;
}
//# sourceMappingURL=validasi.js.map