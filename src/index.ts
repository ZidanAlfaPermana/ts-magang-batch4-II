import { Peserta, JurnalHarian } from "./types";
import {formatTanggal, formatNama} from "./utils";
import type { StatusPeserta} from "./types";

const peserta: Peserta = {
    id: 1,
    nama: "Zidan",
    sekolah: "SMKN 5 Malang",
    kelas: "XI-PPLG-3"
}

const jurnal: JurnalHarian = {
    id: 1,
    kegiatan: "Belajar mengenai Astro ",
    hambatan: "tidak ada",
    rencanaBesok: "Belajar mengenai Astro ",
}

console.log(peserta);
console.log(jurnal);
console.log(formatNama("zidan alfa permana"));
console.log(formatTanggal(new Date('07-07-2008')));

const statusPeserta: StatusPeserta = "aktif";