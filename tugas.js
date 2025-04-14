// TUGAS GANJIL GENAP

console.log("----------INI TUGAS PLAT GANJIL GENAP----------")
let platNomor = ["B 2342 JHR" , "B 6845 ITM" , "B 4566 NGR" , "F 2803 JIR"]

for (let i = 0; i < platNomor.length; i++) {
    let pisahinAngka = platNomor[i].match(/\d+/)
    
    if (pisahinAngka) {
        let angka = parseInt(pisahinAngka[0])
        let sisa = angka % 2

        switch (sisa) {
            case 0 :
                console.log(`Plat ${platNomor[i]} ini adalah GENAP`)
            case 1 :
                console.log(`Plat ${platNomor[i]} ini adalah GANJIL`)
            
        }

    }
}

// TUGAS NILAI SISWA


console.log("----------INI TUGAS NILAI SISWA----------")
let siswa = [
    { nama: "Habi", nilai: "A" },
    { nama: "Kinza", nilai: "C" },
    { nama: "Rashad", nilai: "A" },
    { nama: "Fadhil", nilai: "B" },
    { nama: "Rafi", nilai: "F" },
    { nama: "Alpin", nilai: "C" },
    { nama: "Jaher", nilai: "Tidak ada" },
    { nama: "Satria", nilai: "C" }
  ];

for (let i = 0; i < siswa.length; i++) {
    let namaSiswa = siswa[i];
    let nilaiSiswa = namaSiswa.nilai

    switch (nilaiSiswa) {
        case "A" :
            console.log(`Siswa ${namaSiswa.nama} memilki nilai yang sangat bagus`);
            break;
        case "B" :
            console.log(`Siswa ${namaSiswa.nama} memilki nilai yang bagus`);
            break;
        case "C" :
            console.log(`Siswa ${namaSiswa.nama} memilki nilai yang harus ditingkatkan lagi`);
            break;
        case "D" :
            console.log(`Siswa ${namaSiswa.nama} memilki nilai yang buruk`);
            break;
        default :
            console.log(`Siswa ${namaSiswa.nama} memiliki nilai yang buruk dan harus mengulang`)
    }
        
}