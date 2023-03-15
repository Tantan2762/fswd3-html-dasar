function ajak() {

    var skor = 0;
    var totSkor = 0;
    let i = 0;
    var lanjut = confirm("Mulai");

    alert("Main Game Kertas Gunting Batu Yuk!");
    let namaMu = prompt("Siapakah Namamu?");
    alert("Selamat Datang " + namaMu + " Sudah Siap Bermain?");
    console.log("Selamat Datang " + namaMu);
    do {
        let pilKamu = prompt("Kamu Pilih Kertas, Gunting, atau Batu?");

        let pilKom = Math.random();
        pilKom = pilKom <= .34 ?
            "Batu" : pilKom <= .67 ?
                "Kertas" : "Gunting",
            alert("Pilihan Komputer: " + pilKom + "\nPilihan Kamu: " + pilKamu + "\nPilih Oke Untuk Cek Poin!");
        console.log("Pilihan Komputer: " + pilKom + "\nPilihan Kamu: " + pilKamu);


        if (pilKamu == pilKom) {
            alert("Yah pilihan kalian sama:(");
            console.log("Yah pilihan kalian sama:(");
            skor = 0;
        } else if (pilKamu == "Kertas" && pilKom == "Gunting") {
            alert("Kamu Kalah:( \nSkor :0");
            console.log("Kamu Kalah:( \nSkor :0");
            skor = 0;
        }
        else if (pilKamu == "Kertas" && pilKom == "Batu") {
            alert("Kamu Menang:) \nSkor :1");
            console.log("Kamu Menang:) \nSkor :1");
            skor = 1;
        }
        else if (pilKamu == "Gunting" && pilKom == "Kertas") {
            alert("Kamu Menang:) \nSkor :1");
            console.log("Kamu Menang:) \nSkor :1");
            skor = 1;
        }
        else if (pilKamu == "Gunting" && pilKom == "Batu") {
            alert("Kamu Kalah:( \nSkor :0");
            console.log("Kamu Kalah:( \nSkor :0");
            skor = 0;
        }
        else if (pilKamu == "Batu" && pilKom == "Kertas") {
            alert("Kamu Kalah:( \nSkor :0");
            console.log("Kamu Kalah:( \nSkor :0");
            skor = 0;
        }
        else if (pilKamu == "Batu" && pilKom == "Gunting") {
            alert("Kamu Menang:) \nSkor :1");
            console.log("Kamu Menang:) \nSkor :1");
            skor = 1;
        }
        else {
            alert("Kamu Salah Masukin Inputan deh :(");
            console.log("Kamu Salah Masukin Inputan deh :(");
            skor = 0;
        }
        totSkor += skor;
        i++;
        lanjut = confirm("Apakah Kamu Mau Lanjut Main Game?");

    } while (lanjut)
    alert("Hasil Skor Akhir Kamu : " + totSkor);
    console.log("Hasil Skor Akhir Kamu : " + totSkor);
}




