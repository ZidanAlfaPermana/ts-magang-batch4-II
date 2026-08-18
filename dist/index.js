"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
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
console.log((0, utils_1.formatNama)("zidan alfa permana"));
console.log((0, utils_1.formatTanggal)(new Date('07-07-2008')));
const statusPeserta = "aktif";
//# sourceMappingURL=index.js.map