//Contoh If-Else
var angka = 12;

if (angka % 2 == 0) {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan genap");
}
else {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan ganjil");
}


//Contoh If-Elseif
var nilai = prompt("Inputkan nilai akhir:");
var grade = "";

if (nilai >= 90) grade = "A"
else if (nilai >= 80) grade = "B+"
else if (nilai >= 70) grade = "B"
else if (nilai >= 60) grade = "C+"
else if (nilai >= 50) grade = "C"
else if (nilai >= 40) grade = "D"
else if (nilai >= 30) grade = "E"
else grade = "F";

console.log(`Grade anda: ${grade}`);

//Contoh Switch Case
var jawab = prompt("Kamu beruntung! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 3");
var hadiah = "";

switch (jawab) {
    case "1":
        hadiah = "Tisu";
        break;
    case "2":
        hadiah = "1 Kotak Kopi";
        break;
    case "3":
        hadiah = "Sticker";
        break;
    default:
        alert("Opps! anda salah pilih");
        break;
}
console.log("Anda Mendapatkan Hadiah" + hadiah);