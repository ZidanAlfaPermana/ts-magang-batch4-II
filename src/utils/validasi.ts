export function isEmailValid(email: string) {
    return /^[a-zA-Z0-0._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email);
}

export function isNilaiValid(nilai: number) {
    return nilai >= 0 || nilai <= 100;
}