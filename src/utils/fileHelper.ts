import * as fs from "fs";
import * as path from "path";

function bacaFile(namaFile: string): string {
    const filePath: string = path.join(__dirname, namaFile);
    return fs.readFileSync(filePath, "utf-8");
}

function tulisFile(namaFile: string, isi: string) {
    const filePath: string = path.join(__dirname, namaFile);
    fs.writeFileSync(filePath, isi, "utf8");
}

console.log(bacaFile("../../test.txt"));
tulisFile("../../test.txt", "Halo nama saya zidan");
console.log(bacaFile("../../test.txt"));