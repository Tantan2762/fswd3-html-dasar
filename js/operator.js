//Operator Aritmatika
var a = 15;
var b = 4;
var c = 0;

// pengurangan
c = a - b;
console.log(`${a} - ${b} = ${c}<br/>`);
// Perkalian
c = a * b;
console.log(`${a} * ${b} = ${c}<br/>`);
// pemangkatan
c = a ** b;
console.log(`${a} ** ${b} = ${c}<br/>`);
// Pembagian
c = a / b;
console.log(`${a} / ${b} = ${c}<br/>`);
// Modulo
c = a % b;
console.log(`${a} % ${b} = ${c}<br/>`);


//Operator Penugasan
//Sama Dengan (=)
const nama = 'reza';

//Tambah Sama Dengan (+=)
let d = 5;
d += 2; // d = 5 + 2
console.log(d); // 7

//Kurang Sama Dengan (-=)
let e = 5;
e -= 2; // e = 5 - 2
console.log(e); // 3

//Kali Sama Dengan (*=)
let f = 5;
f *= 2; // f = 5 * 2
console.log(f); // 10

//Bagi Sama Dengan (/=)
let g = 5;
g /= 2; // g = 5 / 2
console.log(g); // 2.5

//Modulus Sama Dengan (%=)
let h = 5;
h %= 2; // h = 5 % 2
console.log(h); // 1

//Eksponensial Sama Dengan (**=)
let i = 5;
i **= 2; // i = 5 ** 2 (lima pangkat dua)
console.log(i); // 25

//Operator Perbandingan
var aku = 20;
var kamu = 19;

// sama dengan
var hasil = aku == kamu;
console.log(`${aku} == ${kamu} = ${hasil}<br/>`);

// lebih besar
var hasil = aku > kamu;
console.log(`${aku} > ${kamu} = ${hasil}<br/>`);

// lebih besar samadengan
var hasil = aku >= kamu;
console.log(`${aku} >= ${kamu} = ${hasil}<br/>`);

// lebih kecil
var hasil = aku < kamu;
console.log(`${aku} < ${kamu} = ${hasil}<br/>`);

// lebih kecil samadengan
var hasil = aku <= kamu;
console.log(`${aku} <= ${kamu} = ${hasil}<br/>`);

// tidak samadengan
var hasil = aku != kamu;
console.log(`${aku} != ${kamu} = ${hasil}<br/>`);

//Operator Logika
let kerja = true;
let nganggur = false;

console.log(kerja && nganggur);
console.log (kerja|| nganggur);
console.log(!kerja);

//Operator Bitwise
let x = 00111100;
let y = 00001101;

console.log(x & y);
console.log(x | y);
console.log(x ^ y);
console.log(~x );

//Operator Ternary
var pertanyaan = confirm("Apakah kamu berumur diatas 18 tahun?");

var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
console.log(hasil);