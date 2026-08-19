declare global {
    type ID = string | number;

    type Timestamp = string;

    interface AppConfig {
        AppName: string;
        version: string;
        maxPeserta: number;
    }
}

export {};