export interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    kelas: string;
}

export type StatusPeserta = "aktif" | "lulus" | "berhenti"