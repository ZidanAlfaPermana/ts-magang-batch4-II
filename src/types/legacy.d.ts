declare module 'sitrack-legacy' {
    export function konversiFormatLama(data: string): object;
    export function validasiJurnalLama(jurnal: object): boolean
    export interface KonfigurasiLegacy { host: string; port: number }
    export default class LegacyClient {
        constructor(host: string, port: number);

        sync();
    }
}