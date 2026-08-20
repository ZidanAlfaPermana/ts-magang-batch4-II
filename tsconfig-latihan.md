<h1 align="center">tsconfig.json Lanjutan</h1>

<p align="center">disini saya akan menjelaskan 8 opsi yang ada di tsconfig.json seperti struktur tsconfig.json, paths, rootDir, outDir, sourceMap, jsx, skipLibCheck, lib, dan verbatimModuleSyntax

---

## tsconfig.json
### Apa itu `tsconfig.json`?
`tsconfig.json` adalah sebuah file json untuk mengatur konfigurasi pada project typescript seperti mengubah root dir, module, dll

contoh kode:

`tsconfig.json`

```json5
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    /*
    tsconfig.json:8:5 - error TS5102: Option 'baseUrl' has been removed. Please remove it from your configuration.
    Use '"paths": {"*": ["./src/*"]}' instead.

    "baseUrl": "./src",

    option baseUrl sudah deprecated dan harus diganti dengan paths
    */
    "paths": {
      /*
      salah jika versi ts terbaru: "@models/*": ["models/*"]
      karena:
      tsconfig.json:17:21 - error TS5090: Non-relative paths are not allowed. Did you forget a leading './'?
      */
      "@models/*": ["./models/*"],
      "@utils/*": ["./utils/*"],
      "@types/*": ["./types/*"]
    },

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "target": "ES2020",
    "types": [
      "node"
    ],
    // For nodejs:
    "lib": ["ES2020"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    "noImplicitReturns": true,
    // "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,
    "esModuleInterop": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  },
}
```

---

## paths
`tsconfig.json`

```json5
{
  "compilerOptions": {
    "paths": {
      "*": ["./src/*"]
    },
  },
}
```
### Apa itu `paths`?
`paths` adalah sebuah option untuk merubah url file menjadi lebih ringkas. contoh:

Pada TS versi 5 keatas terdapat perubahan pada option baseUrl 

`tsconfig.json`


```json5
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "*": ["./src/*"]
    },
  },
}
```

error

```log
tsconfig.json:8:5 - error TS5102: Option 'baseUrl' has been removed. Please remove it from your configuration.
    Use '"paths": {"*": ["./src/*"]}' instead.
```

Karena option `baseUrl: ""` sudah deprecated dan sudah digabung dengan `paths: {}`, serta tidak selaras dengan `moduleResolution: "bundler" atau "node16"`


`tsconfig.json`


```json5
{
  "compilerOptions": {
    "paths": {
      "*": ["./src/*"]
    },
  },
}
```
Ini benar.

Sebagai kompensasi untuk menghilangnya `baseUrl` maka pada option paths harus diberi relative path pada option paths itu. Contoh:


`tsconfig.json`


```json5
{
  "compilerOptions": {
    "paths": {
      "*": ["src/*"]
    },
  },
}
```

Salah, dan error:

```log
tsconfig.json:17:21 - error TS5090: Non-relative paths are not allowed. Did you forget a leading './'?
```


`tsconfig.json`


```json5
{
  "compilerOptions": {
    "paths": {
      "*": ["./src/*"]
    },
  },
}
```

Benar, karena terdapat relative path seperti ./

---

## sourceMap

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "sourceMap": true,
  },
}
```

### Apa itu `sourceMap`?
`sourceMap` adalah Sebuah opsi untuk menghasilkan file pemetaan statis (berekstensi .map) yang menghubungkan setiap baris kode pada file keluaran (JavaScript) kembali ke posisi aslinya di file sumber (TypeScript). contoh:

`kalkulator.ts`
```typescript
function bagi(a: number, b: number) {
  if (b === 0) throw new Error("Tidak bisa dibagi nol!"); 
  return a / b;
}
bagi(10, 0); // error
```

jika `sourceMap: false` maka akan menampilkan error dan line pada hasil compile nya alias file js nya

```log
Uncaught Error: Tidak bisa dibagi nol! at kalkulator.js:142
```

Jika `sourceMap: true` maka akan menampilkan error dan line pada file aslinya/file typescript

```log
Uncaught Error: Tidak bisa dibagi nol! at kalkulator.ts:5
```

---

## jsx
`tsconfig.json`

```json5
{
  "compilerOptions": {
    "jsx": "react-jsx",
  },
}
```
### Apa itu `jsx`
`jsx` adalah sebuah opsi kompilator yang mendefinisikan strategi penerjemahan (transformasi) sintaks Markup (seperti kode mirip HTML di dalam JS/TS) menjadi fungsi pemanggilan standar JavaScript yang dapat dipahami oleh search engine (browser). contoh:

jika `jsx: react` maka compiler membaca tag html dan menulis ulang kode itu di js secarah harfiah
```typescript
React.createElement("div", null, "Hello")
```
jika `jsx: react-jsx` maka compiler akan menyisipkan baris import tersembunyi di atas kode (mengambil pustaka dari `react/jsx-runtime`) dan mengubah tag tersebut menjadi `_jsx("div", { children: "Hello" })`

---

## skipLibCheck

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "skipLibCheck": true,
  },
}
```
### Apa itu `skipLibCheck`
`skipLibCheck` adalah Sebuah pengalih (toggle) optimasi performa yang memerintahkan kompilator TypeScript untuk melewati proses analisis tipe data secara mendalam pada semua file deklarasi tipe eksternal (.d.ts), terutama yang berada di dalam folder node_modules. contoh:

jika `skipLibCheck: true` maka compiler memberi tahu compiler bahwa "Jika file berakhiran .d.ts, lewati fase pengecekan logika tipe datanya."

jika `skipLibCheck: false` maka compiler memberi tahu compiler bahwa "Jika file berakhiran .d.ts, cek logika tipe datanya pada fase pengecekan."

---

## lib

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "lib": ["DOM"],
  },
}
```
### Apa itu `lib`
`lib` adalah sebuah option yang memilkil kumpulan kamus definisi tipe data bawaan (built-in API interfaces) yang memberi tahu TypeScript lingkungan komputasi apa yang sedang digunakan (misalnya Browser atau Node.js). contoh:

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "lib": ["DOM"],
  },
}
```

jika "DOM" ditambahkan pada lib, maka kompilator akan memuat definisi objek browser ke dalam memori sehingga tidak error.

```javascript
document.getElementById("app");
```

jika "DOM" tidak ada pada lib, maka kompilator tidak mengenali sintaks tersebut dan akan mengeluarkan error.

```log
error TS2584: Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.
```

---

## rootDir

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "rootDir": "./src",
  },
}
```

### Apa itu `rootDir`?
`rootDir` adalah sebuah option untuk memberitahu TypeScript bahwa script atau file utama berada di sebuah folder path yang spesific, sebelum compiler mengompile code TypeScript itu. contoh:

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "rootDir": "",
  },
}
```

jika `rootDir` kosong, maka compiler tidak tahu lokasi asli atau path dari file typescript itu.

```log
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module 'D:\ZIDAN\PKL TOP SECRET\typescript\ts-minggu7\dist\utils\fileHelper.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```

---

## outDir

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "outDir": "./src",
  },
}
```
### apa itu `outDir`?
`outDir` adalah sebuah option untuk memberitahu compiler dimana letak atau path output dari compiling sebelumnya secara specific. contoh:


`tsconfig.json`

```json5
{
  "compilerOptions": {
    "outDir": "",
  },
}
```

jika `outDir` kosong, maka compiler tidak tahu lokasi untuk meletakkan hasil compile nya alias berada langsung di samping file yang di compile.

tanpa `outDir`
```log
folder
| test.js
| test.ts
```

dengan `outDir`
```log
folder
|-- dist
|    |
|    | test.js
|    
| test.ts
```

---

## verbatimModuleSyntax

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "verbatimModuleSyntax": false,
  },
}
```
### apa itu `verbatimModuleSyntax`?
`verbatimModuleSyntax` adalah sebuah option untuk mengecek apakah import dan export tersebut secara explisit membedakan mana type mana yang module. contoh:

jika

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "verbatimModuleSyntax": true,
  },
}
```

maka semua import dan export harus explicit. contoh:

```typescript
export type {default as Peserta} from './Peserta';
```

jika hanya

```typescript
export {default as Peserta} from './Peserta';
```

maka akan error:
```log
TS1295: ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. Adjust the 'type' field in the nearest 'package.json' to make this file an ECMAScript module, or adjust your 'verbatimModuleSyntax', 'module', and 'moduleResolution' settings in TypeScript.

export {default as Peserta} from './Peserta';/
```

jika

`tsconfig.json`

```json5
{
  "compilerOptions": {
    "verbatimModuleSyntax": false,
  },
}
```

maka semua import dan export bisa ditulis tanpa memberitahu typescript bahwa lib ini bertipe apa. contoh:

```typescript
export {default as Peserta} from './Peserta';
```
tanpa menambahkan `type` typescript tahu .bahwa lib itu sudah aman