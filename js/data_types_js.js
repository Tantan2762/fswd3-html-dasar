//Tipe Data Number
let nomor = 40;
nomor = 70;
var no = 60;
const numb = 50;
console.log(typeof (nomor));

//Tipe BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal
console.log(typeof (x));

//Tipe String
let c = "DuniaIF";
console.log(typeof c);

//Tipe Boolean
let isLoggedIn =true;
let isAdmin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;
console.log(typeof isAdmin); //bool

//Tipe Null
var pacar = null;
let uang = null;
const usaha = null;
console.log(typeof(pacar));
console.log(typeof(uang));
console.log(typeof(usaha));

//Tipe Undefined
var pacar1;
let uang1 ;
console.log(typeof(pacar1));
console.log(typeof(uang1));

//Tipe Symbol
var pekerja = Symbol('Nova');
let pegawai = Symbol('Niva');
console.log(typeof(pekerja))
console.log(typeof(pegawai))

//Tipe Object
var pegawai_telkom = {
    nama : "Tantan",
    pekerjaan : "Software Engineer",
    usia : 20,
    status_perkawinan : false,
}

console.log(typeof(pegawai_telkom));
