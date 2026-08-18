"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTanggal = formatTanggal;
exports.formatNama = formatNama;
function formatTanggal(tanggal) {
    return tanggal.toLocaleString("id-ID");
}
function formatNama(nama) {
    return nama.slice(0, 1).toUpperCase() + nama.slice(1);
}
//# sourceMappingURL=format.js.map