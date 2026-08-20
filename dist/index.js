"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("@utils");
const peserta = {
    id: 1,
    nama: "Zidan",
    sekolah: "SMKN 5 Malang",
    kelas: "XI-PPLG-3"
};
const jurnal = {
    id: 1,
    kegiatan: "Belajar mengenai Astro ",
    hambatan: "tidak ada",
    rencanaBesok: "Belajar mengenai Astro ",
};
console.log(peserta);
console.log(jurnal);
console.log((0, _utils_1.formatNama)("zidan alfa permana"));
console.log((0, _utils_1.formatTanggal)(new Date('07-07-2008')));
const statusPeserta = "aktif";
const timestamp = new Date("07-07-2008").toLocaleString();
const conf = {
    AppName: "Zidan",
    version: "0.0.1",
    maxPeserta: 1
};
console.log(statusPeserta);
console.log(timestamp);
console.log(conf);
//# sourceMappingURL=index.js.map